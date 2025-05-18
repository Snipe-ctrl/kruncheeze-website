import Image from "next/image";
import Card from "@/components/card";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">Gourmet grilled cheese sandwiches and mac & cheese</p>
        </div>

        {/* Grilled Cheese Section */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-yellow-400 text-black px-8 py-2 text-xl font-bold uppercase tracking-wider">
                Grilled Cheeze Sandwhiches
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-10 italic">Served on sourdough with a side of chips</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MenuCard
              title="Four the Love of Cheeze"
              description="A classic blend of four cheezes"
              price="$8"
              ingredients={[
                "Sourdough bread",
                "Cheddar cheese",
                "Mozzarella",
                "Provolone",
                "American cheese",
                "Butter",
              ]}
              image="/images/4-the-love.jpg"
            />

            <MenuCard
              title="The Rancher"
              description="Cheddar, chicken, bacon, red onion & ranch on garlic butter bread"
              price="$12"
              ingredients={[
                "Garlic butter bread",
                "Cheddar cheese",
                "Grilled chicken",
                "Bacon",
                "Red onion",
                "Ranch dressing",
              ]}
              image="/images/the-rancher.JPG"
            />

            <MenuCard
              title="The Krunch"
              description="White cheddar, apple, prosciutto & honey"
              price="$11"
              ingredients={["Sourdough bread", "White cheddar", "Thinly sliced apple", "Prosciutto", "Honey", "Butter"]}
              image="/images/the-krunch.jpg"
            />

            <MenuCard
              title="Dip Stix"
              description="Sticks of grilled cheeze served with a cup of tomato soup"
              price="$10"
              ingredients={["Sourdough bread", "Blend of cheeses", "Butter", "Homemade tomato soup"]}
              image="/images/dip-stix.png"
            />

            <MenuCard
              title="Chicken Pesto"
              description="Mozzarella, pesto, chicken, red onion, spinach & tomato"
              price="$11"
              ingredients={[
                "Sourdough bread",
                "Mozzarella",
                "Basil pesto",
                "Grilled chicken",
                "Red onion",
                "Fresh spinach",
                "Tomato",
                "Butter",
              ]}
              image="/images/chicken-pesto.jpg"
            />

            <MenuCard
              title="The Porky"
              description="White cheddar, pulled pork, red onion & bbq sauce"
              price="$11"
              ingredients={[
                "Sourdough bread",
                "White cheddar",
                "Slow-cooked pulled pork",
                "Red onion",
                "BBQ sauce",
                "Butter",
              ]}
              image="/images/the-porky.png"
            />

            <MenuCard
              title="Gouda Jams"
              description="Gouda, bacon, blackberry jam & jalapenos"
              price="$10"
              ingredients={[
                "Sourdough bread",
                "Gouda cheese",
                "Crispy bacon",
                "Blackberry jam",
                "Fresh jalapeños",
                "Butter",
              ]}
              image="/images/gouda-jams.jpg"
            />

            <MenuCard
              title="Best of Both Worlds"
              description="Classic grilled cheeze with mac & cheeze piled inside"
              price="$11"
              ingredients={["Sourdough bread", "Cheddar cheese", "Homemade mac & cheese", "Butter"]}
              image="/images/best-of-both-worlds.png"
            />
          </div>
        </section>

        {/* Mac & Cheese Section */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-yellow-400 text-black px-8 py-2 text-xl font-bold uppercase tracking-wider">
                Mac & Cheeze
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mb-10 italic max-w-3xl mx-auto">
            Large elbow macaroni mixed with a homemade sweet smokey cheeze sauce, topped with our krunchy breadcrumb
            topping
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <Image src="/images/mac-and-cheese.png" alt="Mac & Cheese" fill className="object-cover" />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Classic Mac & Cheeze</h3>

                  <div className="flex flex-col space-y-4 mb-4">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Small</span>
                      <span className="text-xl font-bold text-yellow-600">$6</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="font-medium">Large</span>
                      <span className="text-xl font-bold text-yellow-600">$9</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Ingredients:</h4>
                    <p className="text-sm text-gray-600">
                      Elbow macaroni, homemade cheese sauce blend, sweet and smokey seasonings, krunchy breadcrumb
                      topping
                    </p>
                  </div>

                  <div className="mt-4 bg-yellow-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-yellow-700">Add your choice of meat for $2</p>
                    <p className="text-xs text-gray-600 mt-1">Bacon, Grilled Chicken, Pulled Pork, or Ham</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Extras Section */}
        <section className="mb-16">
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-yellow-300"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-yellow-400 text-black px-8 py-2 text-xl font-bold uppercase tracking-wider">
                Extras
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ExtrasCard title="Tomato Soup" description="Creamy tomato soup, perfect for dipping" price="$3" />

            <ExtrasCard title="Kettle Chips" description="Crispy kettle-cooked potato chips" price="$2" />
          </div>
        </section>
      </div>
    </div>
  )
}

function MenuCard({ title, description, price, ingredients, image }) {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      {image && (
        <div className="h-48 relative">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-xl font-bold text-yellow-600 mb-3">{price}</p>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Ingredients:</h4>
          <ul className="text-xs text-gray-600">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="inline">
                {ingredient}
                {index < ingredients.length - 1 ? ", " : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

function MacCheeseCard({ title, description, price, ingredients, image }) {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 h-48 md:h-auto relative">
          <Image src={image || "/placeholder.svg"} alt={`${title} Mac & Cheese`} fill className="object-cover" />
        </div>
        <div className="p-4 md:w-2/3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-2xl font-bold text-yellow-600 mb-3">{price}</p>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">Ingredients:</h4>
            <ul className="text-xs text-gray-600">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="inline">
                  {ingredient}
                  {index < ingredients.length - 1 ? ", " : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  )
}

function ExtrasCard({ title, description, price, ingredients, image }) {
  return (
    <Card className="bg-white border border-gray-200 p-4 hover:shadow-md transition-all duration-300">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold text-yellow-600">{price}</p>
    </Card>
  )
}
