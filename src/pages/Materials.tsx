import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface Material {
  title: string;
  thumb?: string;
  link?: string;
  youtubeId?: string;
}

interface Section {
  id: string;
  title: string;
  materials: Material[];
  fullImage?: string;
}

const Materials = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections: Section[] = [
    {
      id: "modos-preparo",
      title: "Modos de Preparo",
      materials: [
        {
          title: "Modo de Preparo do Gelato Proteico Herbalife Simplificado com água",
          youtubeId: "q0uQmMiDKvY",
        },
        {
          title: "Modo de Preparo do Gelato Proteico Herbalife com Gelo",
          youtubeId: "mkJRs4mKxP8",
        },
        {
          title: "Modo de Preparo do Gelato Proteico Herbalife com Shake Fórmula 1 com Gelo",
          youtubeId: "5Pkc3ygTECc",
        },
      ],
    },
    {
      id: "comunicacao",
      title: "Comunicação",
      materials: [
        {
          title: "Vídeo Comunicação",
          youtubeId: "Z_4ClKtvwIc",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/ttuj6tmT2fzflgp?path=%2FProdutos%2FGELATO%20PROTEICO%2FVideos#/files_mediaviewer/Herbalife_LancamentoSorvete_V3.mp4",
        },
        {
          title: "Apresentação",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/Captura-de-tela-2025-12-02-183233.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/ttuj6tmT2fzflgp?path=%2FProdutos%2FGELATO%20PROTEICO%2FApresenta%C3%A7%C3%A3o",
        },
        {
          title: "Flyers",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/flyers.jpg",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/OKZKobKww1kK45B",
        },
      ],
    },
    {
      id: "redes-sociais",
      title: "Redes Sociais",
      materials: [
        {
          title: "Vídeos Virais",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/videos.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/OD8ROtsUWg34WiO",
        },
      ],
    },
    {
      id: "guias",
      title: "Guias",
      materials: [
        {
          title: "Folheto Impressão",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/folheto.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/xIsAWGxp20cktmK",
        },
        {
          title: "E-book",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/Captura-de-tela-2025-12-02-204557.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/QMd1hr6re5O7yIu",
        },
      ],
    },
    {
      id: "promocao",
      title: "Promoção",
      materials: [],
      fullImage: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/Picture1-1.jpg",
    },
    {
      id: "evs",
      title: "EVS",
      materials: [
        {
          title: "Cartaz",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/cartaz-1.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/AavjBalSDYhEt0M",
        },
        {
          title: "Convite",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/cartaz.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/vRyk2xfWW9mUdm9",
        },
        {
          title: "Convite editável",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/convitee.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/TPPGHzX3AZhy6aw",
        },
        {
          title: "Display de Mesa",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/convite.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/rKOC642MOpDpmGr",
        },
        {
          title: "Jogo Americano",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/jogoamericano.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/z65k6SaBihQVx2T",
        },
        {
          title: "Selos",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/selos.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/aHQurpyaDP4Bcb4",
        },
        {
          title: "Móbile",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/mobile.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/72Fnq5cmG8sPvlb",
        },
        {
          title: "Cavalete",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/cavalete.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/0WqISJwf2n2u4Jj",
        },
        {
          title: "Cartela de Fidelidade",
          thumb: "https://eventosepromoherbalife.com/wp-content/uploads/2025/12/fidelidade.png",
          link: "https://drive.herbalifelifeon.com.br/index.php/s/lkqDY17K3jIf6Wb",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const scrollPosition = window.scrollY + 150;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Image */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <img
          src="https://eventosepromoherbalife.com/wp-content/uploads/2025/12/Sorvete-Banner-Site-1920-Largura.jpg"
          alt="Herbalife Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://eventosepromoherbalife.com/wp-content/uploads/2023/05/cropped-Picture1-2.png"
                alt="Herbalife Logo"
                className="h-8 md:h-10 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4 ml-4">
              <a
                href="https://www.myherbalife.com/pt-BR/Shop/Catalog/Items/Search/Ds/10627?cmp=M_br_pt_website_gelato_externalsite_paggelato_20251202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-category hover:bg-category/90 text-category-foreground">
                  Compre aqui
                </Button>
              </a>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-base font-medium transition-colors hover:text-category ${
                    activeSection === section.id
                      ? "text-category"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://www.myherbalife.com/pt-BR/Shop/Catalog/Items/Search/Ds/10627?cmp=M_br_pt_website_gelato_externalsite_paggelato_20251202"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-category hover:bg-category/90 text-category-foreground">
                  Compre aqui
                </Button>
              </a>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <div className="flex flex-col gap-4 mt-8">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          scrollToSection(section.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`text-left text-lg font-medium transition-colors hover:text-category ${
                          activeSection === section.id
                            ? "text-category"
                            : "text-muted-foreground"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mb-20 scroll-mt-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-category">
              {section.title}
            </h2>

            {section.fullImage ? (
              <div className="w-full">
                <img
                  src={section.fullImage}
                  alt={section.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ) : section.materials.length === 0 ? (
              <div className="text-center py-12 bg-muted rounded-lg">
                <p className="text-muted-foreground text-lg">
                  Materiais em breve...
                </p>
              </div>
            ) : (
              <div
                className={`grid gap-6 items-start ${
                  section.materials.some((m) => m.youtubeId)
                    ? "grid-cols-1 lg:grid-cols-2"
                    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {section.materials.map((material, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-0">
                      {material.youtubeId ? (
                        // YouTube Video Embed
                        <div>
                          <div className="aspect-video">
                            <iframe
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${material.youtubeId}`}
                              title={material.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-sm md:text-base mb-3">
                              {material.title}
                            </h3>
                            {material.link && (
                              <a
                                href={material.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button
                                  variant="default"
                                  size="sm"
                                  className="w-full bg-category hover:bg-category/90 text-category-foreground"
                                >
                                  <Download className="w-4 h-4 mr-2" />
                                  Baixar Vídeo
                                </Button>
                              </a>
                            )}
                          </div>
                        </div>
                      ) : (
                        // Downloadable Material
                        <a
                          href={material.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group"
                        >
                          {material.thumb && (
                            <div className="aspect-[4/3] overflow-hidden bg-muted">
                              <img
                                src={material.thumb}
                                alt={material.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <div className="p-4">
                            <h3 className="font-semibold mb-3 text-sm md:text-base">
                              {material.title}
                            </h3>
                            <Button
                              variant="default"
                              size="sm"
                              className="w-full bg-category hover:bg-category/90 text-category-foreground"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              Baixar Material
                            </Button>
                          </div>
                        </a>
                      )}
                    </CardContent>
                  </Card>
          ))}
              </div>
            )}
          </section>
  ))}
</div>

      {/* Footer */}
      <footer className="bg-muted mt-20 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Disclaimer */}
            <div className="text-xs text-muted-foreground leading-relaxed">
              <p>
                ¹Este não é um alimento baixo em valor energético. Comparativo baseado em uma seleção dos principais competidores do mercado de gelatos artesanais que divulgam o nutricional em seu site e sorvetes premium vendidos no varejo. ²Os valores nutricionais do mercado foram calculados para refletir 100 g de produto de consumo. Para mais informações sobre os produtos Herbalife, consulte o catálogo ou acesse www.herbalife.com. Leia atentamente o rótulo antes de consumir os produtos.
              </p>
            </div>

            {/* Company Info */}
            <div className="text-sm text-foreground space-y-3">
              <p className="font-semibold">
                © 2025 Herbalife International do Brasil. Todos os direitos reservados.
              </p>
              <p>
                Rua Werner Von Siemens, nº 111, Prédio 19 – Espaço 03 – 2° Andar, Lapa de Baixo, São Paulo – SP, CEP 05069-010
              </p>
              <p>
                Departamento de Serviços ao Distribuidor Independente (11) 3879-7822 / 0300 100 0330 de seg à sex das 08h30 às 17h30 (horário de Brasília)
              </p>
              <p>
                <a
                  href="http://herbalife-econnect.hrbl.com/intelligentchannel/mainpage?countryid=BR&locale=pt_BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-category hover:underline"
                >
                  Clique aqui
                </a>{" "}
                para enviar sua dúvida pelo CANAL INTELIGENTE.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm pt-4 border-t border-border">
              <a
                href="http://www.herbalife.com.br/termos-de-uso"
                target="_blank"
                rel="noopener noreferrer"
                className="text-category hover:underline font-medium"
              >
                TERMOS DE USO
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="http://www.herbalife.com.br/politica-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-category hover:underline font-medium"
              >
                POLÍTICA DE PRIVACIDADE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Materials;
