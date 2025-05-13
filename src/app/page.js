import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Truck, Award, Clock, MapPin, Calendar } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dip-stix.png"
            alt="Grilled cheese being dipped in soup"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gourmet Grilled Cheese on Wheels</h1>
            <p className="text-xl mb-8">
              Serving up the most delicious, melty, and creative grilled cheese sandwiches in town.
            </p>
            <Link
              href="/menu"
              className="inline-flex items-center bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              View Our Menu <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

            {/* About Section */}
            <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About KrunCheeze</h2>
              <p className="text-gray-700 mb-4">
                KrunCheeze is a gourmet food truck specializing in creative grilled cheese sandwiches and mac & cheese
                dishes that will satisfy your cheesy cravings.
              </p>
              <p className="text-gray-700 mb-4">
                We use only the finest ingredients, artisanal breads, and a variety of premium cheeses to create the
                perfect melty masterpiece. From classic grilled cheese to gourmet combinations, we've got something for
                everyone.
              </p>
              <p className="text-gray-700 mb-6">
                Look for our distinctive black and yellow truck at food festivals, corporate events, and popular spots
                around town!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-500" />
                  <span>Premium Ingredients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-yellow-500" />
                  <span>Mobile Food Truck</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-500" />
                  <span>Award-Winning Recipes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-yellow-500" />
                  <span>Fast & Fresh Service</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/best-of-both-worlds.png"
                alt="Loaded grilled cheese sandwich"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/images/food-truck.png"
                alt="Mac and cheese with bacon"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/images/the-porky.png"
                alt="Grilled cheese with ham"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
              <Image
                src="/images/punch-card.png"
                alt="KrunCheeze business card"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-yellow-400 text-black px-12 py-3 text-2xl font-bold uppercase tracking-wider">
                FIND US
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Locations Column */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
                <span className="text-yellow-500 mr-2">
                  <MapPin size={24} />
                </span>
                LOCATIONS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">TUESDAY</h4>
                    <span className="text-yellow-600">11:00 AM - 2:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Downtown Food Truck Park</p>
                  <p className="text-sm text-gray-600">123 Main Street</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">WEDNESDAY</h4>
                    <span className="text-yellow-600">11:00 AM - 2:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Midtown Market</p>
                  <p className="text-sm text-gray-600">456 Center Avenue</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">THURSDAY</h4>
                    <span className="text-yellow-600">11:00 AM - 2:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Tech Park</p>
                  <p className="text-sm text-gray-600">789 Innovation Drive</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">FRIDAY</h4>
                    <span className="text-yellow-600">11:00 AM - 8:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Riverside Food Truck Rally</p>
                  <p className="text-sm text-gray-600">321 River Road</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">SATURDAY</h4>
                    <span className="text-yellow-600">9:00 AM - 3:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Farmers Market</p>
                  <p className="text-sm text-gray-600">555 Market Square</p>
                </div>
              </div>
            </div>

            {/* Events Column */}
            <div className="bg-gray-50 rounded-lg p-6 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-6 flex items-center text-gray-900">
                <span className="text-yellow-500 mr-2">
                  <Calendar size={24} />
                </span>
                UPCOMING EVENTS
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">JUNE 15</h4>
                    <span className="text-yellow-600">12:00 PM - 8:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Food Truck Festival</p>
                  <p className="text-sm text-gray-600">City Park</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">JUNE 22</h4>
                    <span className="text-yellow-600">5:00 PM - 10:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Summer Concert Series</p>
                  <p className="text-sm text-gray-600">Amphitheater</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">JULY 4</h4>
                    <span className="text-yellow-600">11:00 AM - 9:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Independence Day Celebration</p>
                  <p className="text-sm text-gray-600">Downtown Square</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-bold text-yellow-600">JULY 15</h4>
                    <span className="text-yellow-600">11:00 AM - 2:00 PM</span>
                  </div>
                  <p className="font-medium text-gray-800">Corporate Lunch</p>
                  <p className="text-sm text-gray-600">Tech Campus</p>
                  <div className="border-t border-gray-200 mt-4"></div>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 italic">
                    * Schedule subject to change. Check our social media for the most up-to-date information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Loyalty Program</h2>
            <p className="text-xl mb-8">Join our loyalty program and get rewarded for your cheese addiction!</p>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4">Buy 10 Sandwiches, Get One FREE!</h3>
              <p className="mb-4">
                Ask for a loyalty card at your next visit. We'll punch it each time you purchase a sandwich, and your
                11th one is on us!
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/punch-card.png"
                  alt="KrunCheeze loyalty card"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
