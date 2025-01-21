import { create } from 'zustand';
import { RESUME_DATA } from '@/components/window/iconWindows/resume/config';
import { ResumeData } from '@/types/resume';

type ViewMode = 'resume' | 'certificates';

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

const MIN_LOADING_TIME = 5500; // Minimum loading time in milliseconds

export const useResumeStore = create<ResumeStore>((set) => ({
    resumeData: {
        ...RESUME_DATA,
        certificates: RESUME_DATA.certificates || []
    },
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
        const startTime = Date.now();

        try {
            const response = await fetch('/api/resume');

            if (!response.ok) {
                throw new Error('Failed to fetch resume data');
            }

            const data = await response.json();

            // Calculate remaining time to meet minimum loading duration
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

            // Wait for the remaining time if needed
            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime));
            }

            set({
                resumeData: data,
                error: null,
                isUsingLocalData: false,
                loading: false,
                dataReady: true
            });
        } catch (error) {
            console.error('Error fetching resume data:', error);

            // Calculate remaining time to meet minimum loading duration
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsedTime);

            // Wait for the remaining time if needed
            if (remainingTime > 0) {
                await new Promise(resolve => setTimeout(resolve, remainingTime));
            }

            set({
                resumeData: RESUME_DATA,
                error: 'Failed to fetch resume data. Using local data.',
                isUsingLocalData: true,
                loading: false,
                dataReady: true
            });
        }
    }
})); 