'use client';

import { useState } from 'react';

export default function GenerateResumePage() {
    const [jobDescription, setJobDescription] = useState('');
    const [extractedCompany, setExtractedCompany] = useState('');
    const [extractedPosition, setExtractedPosition] = useState('');
    const [summary, setSummary] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');
    const [pdfFilename, setPdfFilename] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(true);

    // Helper function to convert base64 to Blob
    function base64ToBlob(base64, mimeType) {
        const byteCharacters = atob(base64);
        const byteArrays = [];

        for (let i = 0; i < byteCharacters.length; i += 512) {
            const slice = byteCharacters.slice(i, i + 512);
            const byteNumbers = new Array(slice.length);

            for (let j = 0; j < slice.length; j++) {
                byteNumbers[j] = slice.charCodeAt(j);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, { type: mimeType });
    }

    async function handleGenerateResume(e) {
        if (e) e.preventDefault();

        try {
            setIsLoading(true);
            setError(null);

            console.log("Sending request to generate resume...");
            const response = await fetch('/api/resume/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    jobDescription
                }),
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate resume');
            }

            const data = await response.json();
            console.log("Received data:", Object.keys(data));

            if (!data.pdf) {
                throw new Error('No PDF data received from the server');
            }

            // Create a PDF URL from the base64 data
            const pdfBlob = base64ToBlob(data.pdf, 'application/pdf');
            const url = URL.createObjectURL(pdfBlob);
            console.log("Created PDF URL");

            setPdfUrl(url);
            setPdfFilename(data.filename || 'resume.pdf');
            setSummary(data.summary || 'No summary provided');
            setExtractedCompany(data.extractedCompany || '');
            setExtractedPosition(data.extractedPosition || '');
            setShowForm(false);
        } catch (err) {
            setError(err.message);
            console.error('Error generating resume:', err);
        } finally {
            setIsLoading(false);
        }
    }

    function handleReset() {
        setPdfUrl('');
        setSummary('');
        setJobDescription('');
        setExtractedCompany('');
        setExtractedPosition('');
        setShowForm(true);
        setError(null);

        // Clean up the object URL to prevent memory leaks
        if (pdfUrl) {
            URL.revokeObjectURL(pdfUrl);
        }
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {pdfUrl ? 'Your Tailored Resume' : 'Generate Tailored Resume'}
            </h1>

            {error && (
                <div className="bg-red-900/20 border border-red-700/50 text-red-400 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg border border-gray-700/50">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : showForm ? (
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold mb-2 text-gray-200">Job Details</h2>
                            <p className="text-gray-400">
                                Paste the job description to generate a tailored resume. We'll automatically extract the company name and position.
                            </p>
                        </div>
                        <form onSubmit={handleGenerateResume}>
                            <label className="block text-sm font-medium text-gray-300 mb-1">
                                Job Description
                            </label>
                            <textarea
                                placeholder="Paste job description here..."
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                rows={10}
                                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    disabled={isLoading || !jobDescription.trim()}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                >
                                    {isLoading ? 'Generating Resume...' : 'Generate Tailored Resume'}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {(extractedCompany || extractedPosition) && (
                            <div className="bg-blue-900/20 border border-blue-700/50 text-blue-400 px-4 py-3 rounded mb-4">
                                <p className="font-medium">Resume generated for:</p>
                                {extractedCompany && <p>Company: {extractedCompany}</p>}
                                {extractedPosition && <p>Position: {extractedPosition}</p>}
                            </div>
                        )}

                        <div className="aspect-[1/1.414] bg-gray-700 rounded-md overflow-hidden border border-gray-600">
                            <iframe
                                src={pdfUrl}
                                className="w-full h-full"
                                title="Tailored Resume"
                            />
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <button
                                onClick={handleReset}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 transition-all duration-200"
                            >
                                New Resume
                            </button>
                            <a
                                href={pdfUrl}
                                download={pdfFilename}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                            >
                                Download PDF
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
