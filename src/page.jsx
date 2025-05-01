import { ChevronRight, Clock, Menu, Send, Users } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SalesCoachLanding() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-100">
            {/* Header */}
            <header className="bg-blue-800 text-white p-4 md:p-6">
                <div className="container mx-auto">
                    <nav className="flex justify-between items-center">
                        <div className="font-semibold text-lg">SalesCoach</div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex space-x-6">
                            <a href="#" className="hover:text-blue-200">
                                Home
                            </a>
                            <a href="#" className="hover:text-blue-200">
                                Services
                            </a>
                            <a href="#" className="hover:text-blue-200">
                                Courses
                            </a>
                            <a href="#" className="hover:text-blue-200">
                                About
                            </a>
                            <a href="#" className="hover:text-blue-200">
                                Contact
                            </a>
                        </div>

                        {/* Mobile Navigation */}
                        <div className="flex items-center gap-4">
                            <Button variant="outline" className="text-white border-white hover:bg-blue-700 hidden sm:flex">
                                Login
                            </Button>

                            <div className="md:hidden">
                                <Button variant="ghost" size="sm" className="text-white">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-blue-800 text-white py-6 md:py-10 lg:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                        <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                                Your AI-Powered <br />
                                Sales Coach
                            </h1>
                            <p className="text-blue-100 text-base md:text-lg">
                                Elevate your sales performance with personalized coaching
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-6">
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                                    <div>
                                        <div className="font-bold text-xl md:text-2xl">72+</div>
                                        <div className="text-xs md:text-sm text-blue-200">Clients</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 md:w-5 md:h-5 text-blue-300" />
                                    <div>
                                        <div className="font-bold text-xl md:text-2xl">1000+</div>
                                        <div className="text-xs md:text-sm text-blue-200">Hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 mt-6 md:mt-0">
                            <div className="relative">
                                <div className="absolute -top-2 -right-2 bg-orange-500 text-white px-2 py-1 text-xs sm:text-sm font-bold rounded">
                                    1440 × 108 Huge
                                </div>
                                <Image
                                    src="/placeholder.svg?height=400&width=500"
                                    alt="Sales Coach"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coaching Form Section */}
            <section className="py-8 sm:py-10 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative bg-blue-50 p-4 sm:p-6 md:p-8">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold">
                                Name
                            </div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-3 md:mb-4">
                                Take a Suggestion Coaching
                            </h2>

                            <form className="space-y-3 md:space-y-4">
                                <Textarea
                                    placeholder="What do you need help with? Enter your sales challenge or question here..."
                                    className="w-full p-3 md:p-4 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] md:min-h-[120px]"
                                />

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Input type="email" placeholder="Your email address" className="flex-grow" />
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Submit <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-8 sm:py-10 md:py-12 bg-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex justify-between items-center mb-6 md:mb-8">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Our Courses</h2>
                        <div className="relative">
                            <div className="absolute -top-2 -right-2 bg-yellow-400 text-gray-800 px-2 py-1 text-xs sm:text-sm font-bold rounded">
                                kawsar.islam
                            </div>
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm md:text-base"
                            >
                                View all <ChevronRight className="h-4 w-4 ml-1" />
                            </a>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Course Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-1 bg-blue-50">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Sales Analytics Course"
                                    width={400}
                                    height={200}
                                    className="w-full h-40 sm:h-48 object-cover rounded"
                                />
                            </div>
                            <div className="p-3 sm:p-4 md:p-5">
                                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">Sales Analytics Mastery</h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">
                                    Learn how to leverage data to boost your sales performance
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-600 font-bold text-sm md:text-base">$199</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-blue-600 border-blue-600 hover:bg-blue-50 text-xs md:text-sm"
                                    >
                                        Enroll Now
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-1 bg-blue-50">
                                <Image
                                    src="/placeholder.svg?height=200&width=400"
                                    alt="Closing Techniques Course"
                                    width={400}
                                    height={200}
                                    className="w-full h-40 sm:h-48 object-cover rounded"
                                />
                            </div>
                            <div className="p-3 sm:p-4 md:p-5">
                                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                                    Advanced Closing Techniques
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">
                                    Master the art of closing deals with proven strategies
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-600 font-bold text-sm md:text-base">$249</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-blue-600 border-blue-600 hover:bg-blue-50 text-xs md:text-sm"
                                    >
                                        Enroll Now
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Course Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-1 bg-blue-50">
                                <div className="relative">
                                    <div className="absolute bottom-2 right-2 bg-yellow-400 text-gray-800 px-2 py-1 text-xs sm:text-sm font-bold rounded">
                                        Anonymous
                                    </div>
                                    <Image
                                        src="/placeholder.svg?height=200&width=400"
                                        alt="Negotiation Skills Course"
                                        width={400}
                                        height={200}
                                        className="w-full h-40 sm:h-48 object-cover rounded"
                                    />
                                </div>
                            </div>
                            <div className="p-3 sm:p-4 md:p-5">
                                <h3 className="font-bold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                                    Negotiation Skills for Sales
                                </h3>
                                <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">
                                    Develop powerful negotiation tactics to maximize deal value
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-blue-600 font-bold text-sm md:text-base">$179</span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-blue-600 border-blue-600 hover:bg-blue-50 text-xs md:text-sm"
                                    >
                                        Enroll Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collaboration Section */}
            <section className="py-8 sm:py-10 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
                            Constant collaboration is how we roll. Let's keep lines of communication open for growth.
                        </h2>

                        <div className="space-y-4 md:space-y-6 mt-6 md:mt-8">
                            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                                    Why should I choose this coach?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    I offer personalized strategies tailored to your specific sales challenges, backed by years of
                                    experience and proven results.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                                    How do you work, how do we start working together?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    We begin with a discovery call to understand your needs, then develop a customized coaching plan with
                                    regular check-ins and actionable feedback.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-1 md:mb-2">
                                    What do I need to get a coaching?
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Just bring your commitment to growth and specific sales challenges you want to overcome. I'll provide
                                    the framework, tools, and guidance.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                                <h3 className="font-semibold text-base md:text-lg text-gray-800 mb-1 md:mb-2">Testimonial</h3>
                                <p className="text-gray-600 italic text-sm md:text-base">
                                    "They thoroughly analyze my sales and craft targeted solutions, allowing me to focus on what matters.
                                    Their coaching has significantly improved my closing techniques and helped me stand out from the
                                    competition."
                                </p>
                                <div className="mt-2 text-xs sm:text-sm text-gray-500">- Sales Director at a Fortune 500 Company</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-10 sm:py-12 md:py-16 bg-blue-800 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to level up?</h2>
                    <p className="text-blue-100 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
                        Take the first step toward transforming your sales performance with personalized coaching
                    </p>
                    <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100 text-sm md:text-base">
                        Schedule a Free Consultation
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white py-8 md:py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        <div>
                            <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">About</h3>
                            <p className="text-gray-600 text-xs md:text-sm">
                                Professional sales coaching to help you reach your targets and grow your career.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">Links</h3>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">Services</h3>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        1:1 Coaching
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Group Training
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Sales Strategy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-blue-600">
                                        Team Development
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-base md:text-lg text-gray-800 mb-3 md:mb-4">Contact</h3>
                            <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-600">
                                <li>Email: contact@salescoach.com</li>
                                <li>Phone: +1 (555) 123-4567</li>
                                <li>Address: 123 Sales Street, Business City</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-600">
                        <p>© {new Date().getFullYear()} Sales Coach. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
