import { ResumeData } from "@/types/resume";
import { RESUME_DATA } from "@/components/window/iconWindows/resume/config";
import { NextResponse } from "next/server";

const resumeDataUrl = 'https://resume-faisal-owimer.vercel.app/api/resume';

export async function GET() {
    try {
        const response = await fetch(resumeDataUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch resume data: ${response.statusText}`);
        }

        const fetchedData = await response.json() as ResumeData;

        // Combine fetched data with local certificates
        const resumeData: ResumeData = {
            ...fetchedData,
            certificates: RESUME_DATA.certificates
        };

        // Structure validation
        if (!resumeData.contact || !resumeData.experience || !resumeData.education) {
            throw new Error('Invalid resume data structure');
        }

        return NextResponse.json(resumeData);
    } catch (error) {
        console.error('Error fetching resume data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch resume data' },
            { status: 500 }
        );
    }
}   