export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About Egypt Travels</h1>

          {/*******Our Mission******/}
          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Egypt Travels, we believe that travel is more than just visiting destinations—it's about creating
              unforgettable memories and connecting with cultures that have shaped human civilization. Our mission is to
              provide authentic, curated travel experiences that showcase the best of Egypt.
            </p>
          </div>

          {/****Why Choose Us ***/}
          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">Why Choose Us?</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">&#10003;</span>
                <span>
                  <strong>Expert Guides</strong> - Our knowledgeable guides are passionate about Egypt's history and
                  culture
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">&#10003;</span>
                <span>
                  <strong>Curated Experiences</strong> - Carefully selected packages that balance adventure, culture,
                  and relaxation
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">&#10003;</span>
                <span>
                  <strong>Quality Accommodations</strong> - Handpicked hotels and resorts that meet our high standards
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">&#10003;</span>
                <span>
                  <strong>Flexible Bookings</strong> - Easy cancellations and rescheduling for your peace of mind
                </span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-xl">&#10003;</span>
                <span>
                  <strong>24/7 Support</strong> - Our dedicated team is always ready to help you
                </span>
              </li>
            </ul>
          </div>

          {/*********Our Story***********/}
          <div className="bg-card rounded-lg p-8 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2020, Egypt Travels emerged from a passion for sharing the magic of Egypt with travelers from
              around the world. What started as a small venture has grown into a trusted platform offering experiences
              in Cairo, Luxor, Aswan, Alexandria, and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work closely with local communities, ensuring that tourism benefits the people and places we visit.
              Every booking contributes to preserving Egypt's cultural heritage and supporting local economies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-primary rounded-lg p-6 text-primary-foreground text-center shadow-md">
              <p className="text-4xl font-bold mb-2">5000+</p>
              <p className="font-semibold">Happy Travelers</p>
            </div>
            <div className="bg-accent rounded-lg p-6 text-accent-foreground text-center shadow-md">
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="font-semibold">Unique Experiences</p>
            </div>
            <div className="bg-secondary rounded-lg p-6 text-secondary-foreground text-center shadow-md">
              <p className="text-4xl font-bold mb-2">5</p>
              <p className="font-semibold">Major Destinations</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
