import { useState, useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Loader2 } from "lucide-react";

interface GalleryImage {
  id: string;
  url: string;
  alt?: string;
}

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/gallery/images");
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16 px-6 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Gallery</h1>
          <p className="text-muted-foreground">A collection of moments captured</p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <Loader2 className="h-12 w-12 mb-4 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading gallery...</p>
          </div>
        ) : images.length > 0 ? (
          /* Masonry Grid */
          <div className="masonry-grid">
            {images.map((image) => (
              <div
                key={image.id}
                className="masonry-item group relative overflow-hidden rounded-lg hover-lift cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt || "Gallery image"}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-effect rounded-lg">
            <p className="text-muted-foreground text-lg">Coming soon! Gallery photos will appear here.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

