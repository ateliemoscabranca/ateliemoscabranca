import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const heroBackgroundUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/imagembaseefeitos_mb_home_637b9e14.jpg';
const logoUrl = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/nova_logo_mosca_branca_23b3e315.png';

const oleoCarouselImages = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_oleo_classico-QYwNVd8ahSEye5Ut3P6pxo.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_oleo_classico-QYwNVd8ahSEye5Ut3P6pxo.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_oleo_classico-QYwNVd8ahSEye5Ut3P6pxo.webp',
];

const modernoCarouselImages = [
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_impressionismo-FTpdmg5ZAcU4srfEcZuygt.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_impressionismo-FTpdmg5ZAcU4srfEcZuygt.webp',
  'https://d2xsxph8kpxj0f.cloudfront.net/310519663507285929/VoGzc2ozpLsEKyF66Mwdvd/slider_impressionismo-FTpdmg5ZAcU4srfEcZuygt.webp',
];

export default function Home() {
  const [expandedInfo, setExpandedInfo] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container py-3 md:py-4 flex items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src={logoUrl}
              alt="Atelê Mosca Branca"
              className="h-12 md:h-16 w-auto"
            />
          </a>
          <div className="flex gap-2 md:gap-4">
            <a href="#estilos" className="text-xs md:text-sm font-medium text-gray-600 hover:text-accent transition-colors">
              Estilos
            </a>
            <a href="#galeria" className="text-xs md:text-sm font-medium text-gray-600 hover:text-accent transition-colors">
              Galeria
            </a>
            <a href="https://wa.me/31997969797" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm font-medium text-gray-600 hover:text-accent transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.203-.368-.067c-1.264-.233-2.477-.571-3.644-1.095l.142 2.069c.469 1.209.942 2.408 1.466 3.507 1.019-1.694 2.306-3.27 3.801-4.511.032-.026.064-.056.096-.082a9.854 9.854 0 013.808-.361z"/></svg>
              <span className="hidden md:inline">Contato</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackgroundUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 text-center max-w-3xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-snug drop-shadow-lg">
            Transforme suas fotos em obras de arte
          </h1>
          <p className="text-base md:text-xl text-white/95 mb-6 md:mb-8 font-sans drop-shadow-md">
            Dois estilos distintos de pintura artística, otimizados para impressão em canvas de alta resolução.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#pedido"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 md:px-10 py-5 md:py-7 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 uppercase inline-block"
            >
              Monte sua tela
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Estilos Section */}
      <section id="estilos" className="py-12 md:py-24 bg-white">
        <div className="container px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Estilos Artísticos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha entre a elegância clássica da pintura a óleo ou a modernidade da arte contemporânea. Ambos preservam os detalhes faciais com inteligência.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-accent text-white rounded-lg font-semibold">
              Óleo sobre Tela
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300">
              Impressionismo
            </button>
          </div>

          {/* Styles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Óleo sobre Tela */}
            <div className="space-y-4">
              <div className="md:hidden">
                <ImageCarousel images={oleoCarouselImages} title="Óleo sobre Tela" />
              </div>
              <div className="hidden md:block">
                <img
                  src={oleoCarouselImages[0]}
                  alt="Óleo sobre Tela"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full border-2 border-accent" />
                  <h3 className="font-serif text-2xl font-bold">Óleo sobre Tela</h3>
                </div>
                <div className="h-1 w-16 bg-accent mb-4" />
                <p className="text-gray-600 mb-4">
                  Pinceladas marcadas e textura rica que evocam a pintura a óleo tradicional. Cores vibrantes com alto contraste, criando uma atmosfera clássica e sofisticada.
                </p>
                <ul className="space-y-2 text-gray-600 hidden md:block">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Pinceladas visíveis e impasto
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Alto contraste e cores vibrantes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Preservação inteligente de rostos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Ideal para galeria clássica
                  </li>
                </ul>
              </div>
            </div>

            {/* Impressionismo */}
            <div className="space-y-4">
              <div className="md:hidden">
                <ImageCarousel images={modernoCarouselImages} title="Impressionismo" />
              </div>
              <div className="hidden md:block">
                <img
                  src={modernoCarouselImages[0]}
                  alt="Impressionismo"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full border-2 border-accent" />
                  <h3 className="font-serif text-2xl font-bold">Impressionismo</h3>
                </div>
                <div className="h-1 w-16 bg-accent mb-4" />
                <p className="text-gray-600 mb-4">
                  Pinceladas suaves e fluidas com fusão de cores. Atmosfera etérea e contemporânea que celebra a criatividade com elegância moderna.
                </p>
                <ul className="space-y-2 text-gray-600 hidden md:block">
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Pinceladas fluidas e suaves
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Fusão de cores e gradientes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Detalhes humanos preservados
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent">✓</span> Perfeito para arte contemporânea
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pronto para transformar suas fotos em arte?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha um dos nossos estilos e comece a criar obras de arte profissionais para impressão em canvas com sua foto ou imagem preferida.
          </p>
          <a
            href="#pedido"
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 md:px-10 py-5 md:py-7 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 uppercase inline-block"
          >
            Monte sua tela
          </a>
        </div>
      </section>

      {/* Informações Complementares - Accordion */}
      <section className="py-8 md:py-12 bg-white border-t border-gray-200">
        <div className="container px-4">
          {/* Informações Complementares Accordion */}
          <div className="mb-4 md:mb-6">
            <button
              onClick={() => setExpandedInfo(expandedInfo === 'info' ? null : 'info')}
              className="w-full flex items-center justify-between bg-accent/20 hover:bg-accent/30 transition-colors px-4 md:px-6 py-3 md:py-4 rounded-lg"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900">INFORMAÇÕES COMPLEMENTARES</h3>
              <ChevronDown className={`w-5 h-5 text-accent transition-transform ${expandedInfo === 'info' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedInfo === 'info' && (
              <div className="bg-white border border-accent/30 border-t-0 px-4 md:px-6 py-4 md:py-6 rounded-b-lg space-y-3 md:space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Prazo de Produção:</h4>
                  <p className="text-gray-600 text-xs md:text-sm">4 a 5 dias úteis após confirmação do pedido feita pelo cliente*.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Forma de Pagamento:</h4>
                  <ul className="space-y-0.5 text-xs md:text-sm text-gray-600 ml-4 list-disc">
                    <li>Pix - 5% de desconto.</li>
                    <li>Boleto - 5% de desconto.</li>
                    <li>Cartão - 2x sem juros - (envio link de pagamento por email através do Picpay ou PagSeguro, necessário cadastro na plataforma).</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Envio/Retirada:</h4>
                  <p className="text-gray-600 text-xs md:text-sm">Enviamos por meio de aplicativos de entrega, Lalamovie, Uber, 99, Indrive, valores conforme endereço, (BH e região)*.</p>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">Correios/Transportadora</p>
                  <p className="text-gray-600 text-xs md:text-sm">Retirada - Bairro Eldorado/Contagem MG</p>
                </div>
              </div>
            )}
          </div>

          {/* Sobre Nossos Produtos Accordion */}
          <div>
            <button
              onClick={() => setExpandedInfo(expandedInfo === 'produtos' ? null : 'produtos')}
              className="w-full flex items-center justify-between bg-accent/20 hover:bg-accent/30 transition-colors px-4 md:px-6 py-3 md:py-4 rounded-lg"
            >
              <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900">SOBRE NOSSOS PRODUTOS</h3>
              <ChevronDown className={`w-5 h-5 text-accent transition-transform ${expandedInfo === 'produtos' ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedInfo === 'produtos' && (
              <div className="bg-white border border-accent/30 border-t-0 px-4 md:px-6 py-4 md:py-6 rounded-b-lg space-y-3 md:space-y-4">
                <p className="text-gray-600 text-xs md:text-sm">Nosso material é impresso em canvas, tecido fosco de aparência rústica, é utilizado em telas de pintura e também em impressões profissionais, devido à sua compatibilidade com tintas pigmentadas e Dye Ink.</p>
                <p className="text-gray-600 text-xs md:text-sm">É um tecido 100% algodão 440gr/M², perfeitamente esticado sob um chassi de madeira certificado, com altíssima qualidade e perfeito acabamento.</p>
                <p className="text-gray-600 text-xs md:text-sm">Sua flexibilidade evita que a impressão fique com aparência craquelada, sendo muito utilizado em exposições de arte, eventos, museus e principalmente na identificação e decoração de ambientes.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Formulário de Pedido */}
      <section id="pedido" className="py-12 md:py-24 bg-gray-50">
        <div className="container px-4 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Monte sua Tela
          </h2>
          
          <form action="https://formspree.io/f/xyzpqrst" method="POST" className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            {/* Email (hidden) */}
            <input type="hidden" name="_next" value={window.location.origin} />
            
            {/* Nome */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Nome *</label>
              <input
                type="text"
                name="nome"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                placeholder="seu@email.com"
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Telefone/WhatsApp *</label>
              <input
                type="tel"
                name="telefone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
                placeholder="(31) 99999-9999"
              />
            </div>

            {/* Estilo */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Estilo de Pintura *</label>
              <select
                name="estilo"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="">Selecione um estilo</option>
                <option value="oleo">Óleo sobre Tela</option>
                <option value="impressionismo">Impressionismo</option>
              </select>
            </div>

            {/* Tamanho */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Tamanho da Tela *</label>
              <select
                name="tamanho"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent"
              >
                <option value="">Selecione um tamanho</option>
                <option value="pequeno">Pequeno (20x30cm)</option>
                <option value="medio">Médio (30x40cm)</option>
                <option value="grande">Grande (40x60cm)</option>
                <option value="extra">Extra Grande (60x90cm)</option>
              </select>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Descrição da Foto/Imagem *</label>
              <textarea
                name="descricao"
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
                placeholder="Descreva a foto ou imagem que você deseja transformar em arte..."
              />
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">Mensagem Adicional</label>
              <textarea
                name="mensagem"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-accent resize-none"
                placeholder="Alguma observação ou pedido especial?"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 uppercase"
            >
              Enviar Pedido
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Atelê Mosca Branca</h3>
              <p className="text-gray-400">
                Transformando fotos em obras de arte com estilos únicos de pintura artística.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#estilos" className="hover:text-accent transition-colors">Estilos</a></li>
                <li><a href="#galeria" className="hover:text-accent transition-colors">Galeria</a></li>
                <li><a href="#pedido" className="hover:text-accent transition-colors">Pedido</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://wa.me/31997969797" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp: (31) 99796-9797</a></li>
                <li><a href="mailto:moscabranca.art@gmail.com" className="hover:text-accent transition-colors">Email: moscabranca.art@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 - Atelê Mosca Branca. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
