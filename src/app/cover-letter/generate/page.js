
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function GenerateCoverLetterPage() {
    const router = useRouter();
    const [coverLetter, setCoverLetter] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [showForm, setShowForm] = useState(true);

    useEffect(() => {
        // Check if auth cookie exists
        const authCookie = Cookies.get('auth');
        if (authCookie) {
            setIsAuthenticated(true);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    }, []);

    async function handleAuthentication(e) {
        e.preventDefault();
        setAuthError('');

        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Authentication failed');
            }

            // Set auth cookie
            Cookies.set('auth', 'authenticated', { expires: 1 }); // Expires in 1 day
            setIsAuthenticated(true);
        } catch (err) {
            setAuthError(err.message);
            console.error('Authentication error:', err);
        }
    }

    async function handleGenerateCoverLetter(e) {
        if (e) e.preventDefault();

        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('/api/cover-letter/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ companyInfo }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate cover letter');
            }

            const data = await response.json();
            setCoverLetter(data.coverLetter);
            setShowForm(false);
        } catch (err) {
            setError(err.message);
            console.error('Error generating cover letter:', err);
        } finally {
            setIsLoading(false);
        }
    }

    function handleReset() {
        setCoverLetter('');
        setCompanyInfo('');
        setShowForm(true);
        setError(null);
    }

    if (!isAuthenticated) {
        return (
            <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Authentication Required
                </h1>

                <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg border border-gray-700/50">
                    <form onSubmit={handleAuthentication} className="space-y-6">
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-gray-700 text-white sm:text-sm"
                                />
                            </div>
                        </div>

                        {authError && (
                            <div className="text-red-500 text-sm">
                                {authError}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Access Cover Letter Generator
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/resume"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Back to Resume
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {coverLetter ? 'Generated Cover Letter' : 'Generate Cover Letter'}
            </h1>

            <div className="bg-gray-800/50 rounded-lg p-8 shadow-lg border border-gray-700/50">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-500 text-center py-10">
                        <p className="text-xl font-semibold mb-2">Error</p>
                        <p>{error}</p>
                        <button
                            onClick={() => handleGenerateCoverLetter()}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Try Again
                        </button>
                    </div>
                ) : showForm ? (
                    <form onSubmit={handleGenerateCoverLetter} className="space-y-6">
                        <div>
                            <label htmlFor="companyInfo" className="block text-sm font-medium text-gray-300 mb-2">
                                Company Information and Job Description
                            </label>
                            <textarea
                                id="companyInfo"
                                name="companyInfo"
                                rows="10"
                                value={companyInfo}
                                onChange={(e) => setCompanyInfo(e.target.value)}
                                placeholder="Paste the job description and any company information here..."
                                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                            <p className="mt-2 text-sm text-gray-400">
                                The more details you provide, the more tailored your cover letter will be.
                            </p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                            >
                                {isLoading ? 'Generating...' : 'Generate Cover Letter'}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <textarea
                            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            rows="15"
                            value={coverLetter}
                            readOnly
                        ></textarea>

                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(coverLetter);
                                alert('Cover letter copied to clipboard!');
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                            </svg>
                            Copy to Clipboard
                        </button>
                    </div>
                )}
            </div>

            <div className="flex justify-between mt-8">
                <Link
                    href="/resume"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-all duration-200"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Resume
                </Link>

                {!isLoading && !error && coverLetter && (
                    <div className="flex space-x-4">
                        <button
                            onClick={handleReset}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            New Cover Letter
                        </button>
                        <button
                            onClick={() => window.print()}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                            Print Cover Letter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

