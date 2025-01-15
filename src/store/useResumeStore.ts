import { create } from 'zustand';
import { RESUME_DATA } from '@/components/window/iconWindows/resume/config';
import { ResumeData, ViewMode } from '@/components/window/iconWindows/resume/types';

interface ResumeStore {
    resumeData: ResumeData;
    loading: boolean;
    dataReady: boolean;
    error: string | null;
    viewMode: ViewMode;
    selectedCertificate: string | null;
    isUsingLocalData: boolean;
    setResumeData: (data: ResumeData) => void;
    setLoading: (loading: boolean) => void;
    setDataReady: (ready: boolean) => void;
    setError: (error: string | null) => void;
    setViewMode: (mode: ViewMode) => void;
    setSelectedCertificate: (id: string | null) => void;
    fetchResumeData: () => Promise<void>;
}

export const useResumeStore = create<ResumeStore>((set) => ({
    resumeData: RESUME_DATA,
    loading: true,
    dataReady: false,
    error: null,
    viewMode: 'resume',
    selectedCertificate: null,
    isUsingLocalData: false,
    setResumeData: (data) => set({ resumeData: data }),
    setLoading: (loading) => set({ loading }),
    setDataReady: (ready) => set({ dataReady: ready }),
    setError: (error) => set({ error }),
    setViewMode: (mode) => set({ viewMode: mode }),
    setSelectedCertificate: (id) => set({ selectedCertificate: id }),
    fetchResumeData: async () => {
        set({ loading: true, error: null, dataReady: false });

        try {
            const response = await fetch('/api/resume');

            if (!response.ok) {
                throw new Error('Failed to fetch resume data');
            }

            const data = await response.json();
            set({
                resumeData: data,
                error: null,
                isUsingLocalData: false,
                dataReady: true
            });
        } catch (err) {
            console.error('Error fetching resume data:', err);
            // Wait longer to ensure loading indicator reaches ~90%
            await new Promise(resolve => setTimeout(resolve, 4000));

            set({
                resumeData: RESUME_DATA,
                error: 'Unable to fetch latest data - Using local version',
                isUsingLocalData: true,
                dataReady: true
            });
        }

        // Wait additional time to ensure loading indicator reaches 100%
        await new Promise(resolve => setTimeout(resolve, 2500));
        set({ loading: false });
    },
})); 