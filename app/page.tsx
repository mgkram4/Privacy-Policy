

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm">
        <div className="p-8">
          {/* Header */}
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Account Deletion Request
          </h1>
          
          {/* How to Request Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How to Request Account Deletion
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                To request the deletion of your account and associated data, please:
              </p>
              <ol className="list-decimal ml-5 space-y-4">
                <li className="text-gray-600">
                  <div className="flex items-center gap-2">
               
                    <span>
                      Send an email to{' '}
                      <a
                        href="mailto:henrychen4736@gmail.com"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        privacy@yourdomain.com
                      </a>{' '}
                      with the subject line Account Deletion Request
                    </span>
                  </div>
                </li>
                <li className="text-gray-600">
                  Include your:
                  <ul className="list-disc ml-6 mt-2 space-y-2">
                    <li>Full name</li>
                    <li>Email address associated with your account</li>
                    <li>Username (if applicable)</li>
                  </ul>
                </li>
                <li className="text-gray-600">
                  We will process your request within 30 days and send you a confirmation email once completed
                </li>
              </ol>
            </div>
          </section>

          {/* Data Handling Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Handling
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Data That Will Be Deleted:
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-600">
                  <li>Account information (username, email, profile)</li>
                  <li>User-generated content</li>
                  <li>Activity history</li>
                  <li>Preferences and settings</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Data That Will Be Retained:
                </h3>
                <ul className="list-disc ml-5 space-y-2 text-gray-600">
                  <li>Aggregate analytics data (non-personally identifiable)</li>
                  <li>Transaction records (as required by law)</li>
                  <li>Communication records related to customer support (retained for 6 months)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Additional Information
            </h2>
            <ul className="list-disc ml-5 space-y-3 text-gray-600">
              <li>Account deletion is permanent and cannot be undone</li>
              <li>Deletion process may take up to 30 days to complete</li>
              <li>Some information may be retained for legal compliance purposes</li>
              <li>
                If you have any questions, contact our support team at{' '}
                <a
                  href="mailto:henrychen4736@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  support@yourdomain.com
                </a>
              </li>
            </ul>
          </section>

          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              Last updated: December 5, 2024
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}