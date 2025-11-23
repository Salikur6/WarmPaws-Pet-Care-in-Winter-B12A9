import React from 'react';

const PrivacyPolicy = () => {
    return (
        <section className="min-h-screen bg-base-200">
            <div className="max-w-4xl mx-auto px-4 py-10 lg:py-16">
                {/* Header */}
                <div className="bg-base-100 rounded-2xl shadow-md p-6 md:p-8 mb-8 border border-base-300">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
                        Privacy Policy
                    </h1>
                    <p className="text-sm text-base-content/70">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                    <p className="mt-4 text-base text-base-content/80">
                        At <span className="font-semibold">WarmPaws</span>, we care about your privacy
                        as much as you care about your pets. This Privacy Policy explains how we
                        collect, use, and protect your information when you use our website and
                        services.
                    </p>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    {/* 1. Information we collect */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            1. Information We Collect
                        </h2>
                        <p className="mb-2">
                            We collect information to provide a smooth, personalized experience on
                            WarmPaws. This may include:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-1">
                            <li>
                                <span className="font-medium">Account Information:</span> name, email
                                address, profile photo.
                            </li>
                            <li>
                                <span className="font-medium">Service Activity:</span> services you view,
                                book, or save as favorites.
                            </li>
                            <li>
                                <span className="font-medium">Technical Data:</span> IP address, browser
                                type, device information, and basic analytics.
                            </li>
                            <li>
                                <span className="font-medium">Communication Data:</span> messages or
                                feedback you send us.
                            </li>
                        </ul>
                    </div>

                    {/* 2. How we use your information */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            2. How We Use Your Information
                        </h2>
                        <p className="mb-2">We use your information to:</p>
                        <ul className="list-disc list-inside space-y-1 ml-1">
                            <li>Let you create and manage your WarmPaws account.</li>
                            <li>Show you winter pet care services that match your interests.</li>
                            <li>Process and manage your service bookings (where applicable).</li>
                            <li>Improve our website, features, and user experience.</li>
                            <li>Send important updates, support messages, or security alerts.</li>
                        </ul>
                    </div>

                    {/* 3. Cookies & tracking */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            3. Cookies & Tracking Technologies
                        </h2>
                        <p className="mb-2">
                            WarmPaws may use cookies and similar technologies to remember your
                            preferences and understand how you use the website. You can control cookies
                            through your browser settings, but turning them off may affect some
                            features.
                        </p>
                    </div>

                    {/* 4. Sharing your information */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            4. Sharing Your Information
                        </h2>
                        <p className="mb-2">
                            We do <span className="font-semibold">not</span> sell your personal data.
                            We may share limited information:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-1">
                            <li>
                                With trusted service providers (for example, hosting, authentication,
                                analytics) who help us run the platform.
                            </li>
                            <li>
                                When required by law, legal process, or to protect our rights and safety.
                            </li>
                        </ul>
                    </div>

                    {/* 5. Data security */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            5. Data Security
                        </h2>
                        <p>
                            We use reasonable technical and organizational measures to keep your data
                            safe. However, no system is 100% secure, so we cannot guarantee absolute
                            protection against every possible risk.
                        </p>
                    </div>

                    {/* 6. Children’s privacy */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            6. Children&apos;s Privacy
                        </h2>
                        <p>
                            WarmPaws is not intended for children under 13. We do not knowingly collect
                            personal information from children. If you believe a child has provided us
                            with personal data, please contact us and we will remove it.
                        </p>
                    </div>

                    {/* 7. Your rights */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            7. Your Choices & Rights
                        </h2>
                        <p className="mb-2">
                            Depending on your location, you may have the right to:
                        </p>
                        <ul className="list-disc list-inside space-y-1 ml-1">
                            <li>Access the personal information we hold about you.</li>
                            <li>Update or correct your account details.</li>
                            <li>Delete your account or request deletion of certain data.</li>
                            <li>Opt out of non-essential communications.</li>
                        </ul>
                        <p className="mt-2">
                            You can manage most of these settings directly from your WarmPaws account
                            or by contacting us.
                        </p>
                    </div>

                    {/* 8. Changes & contact */}
                    <div className="bg-base-100 rounded-2xl shadow-sm p-6 border border-base-200">
                        <h2 className="text-xl md:text-2xl font-semibold mb-3">
                            8. Changes to This Policy
                        </h2>
                        <p className="mb-3">
                            We may update this Privacy Policy from time to time to reflect changes in
                            our services or in the law. When we do, we will update the &quot;Last
                            updated&quot; date at the top of this page. We encourage you to review this
                            page periodically.
                        </p>

                        <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
                        <p className="text-base-content/80">
                            If you have any questions about this Privacy Policy or how we handle your
                            data, you can contact us at:
                        </p>
                        <ul className="mt-2 space-y-1">
                            <li>Email: <span className="font-medium">support@warmpaws.com</span></li>
                            <li>Website: <span className="font-medium">www.warmpaws.com</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
