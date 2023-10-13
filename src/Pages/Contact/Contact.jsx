

const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
                <p className="text-gray-700 mb-4">
                    Feel free to reach out to us for any inquiries or feedback. We are here to assist you.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                        <p className="text-gray-700">
                            Email: hossainahmmedtaufiq@gmail.com
                            <br />
                            Phone: +8801773983904
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Address</h2>
                        <p className="text-gray-700">
                            Malibagh
                            <br />
                            Dhaka
                            <br />
                            Bangladesh
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Contact Form</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;