import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  CreditCard, 
  Layout, 
  Sparkles, 
  Music, 
  Video, 
  MessageSquare, 
  Star,
  Check,
  ChevronDown,
  ArrowRight,
  TrendingDown,
  Bot,
  Infinity,
  Clock,
  Quote
} from "lucide-react";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  paymentUrl: string;
  period: string;
  isPromo: boolean;
  features: string[];
  logoUrl?: string;
  icon: any;
  colorClass: string;
  iconColorClass: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ricardo Silva",
    role: "Editor de Vídeos",
    content: "O CapCut PRO mudou meu jogo. Pagar uma única vez por ano economizou quase 500 reais que eu gastaria na assinatura mensal oficial. Recomendo demais!",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Mariana Costa",
    role: "Designer Freelancer",
    content: "O Canva Pro ativado no meu próprio e-mail foi a melhor coisa. Não perdi meus projetos e agora tenho todos os recursos premium liberados.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Felipe Almeida",
    role: "Estudante e Criador de Conteúdo",
    content: "Uso o ChatGPT Plus compartilhado e funciona perfeitamente. O acesso às imagens do DALL-E e o GPT-4o são essenciais para minhas pesquisas.",
    rating: 5,
    avatar: "FA"
  },
  {
    name: "Juliana Mendes",
    role: "Social Media",
    content: "O suporte foi muito rápido quando tive uma dúvida sobre a ativação. O acesso chegou no meu WhatsApp segundos depois do pagamento.",
    rating: 5,
    avatar: "JM"
  }
];

const products: Product[] = [
  {
    id: "chatgpt-shared",
    name: "ChatGPT Plus Compartilhado",
    price: "47,00",
    paymentUrl: "https://pay.kirvano.com/7f0a76d5-cad6-48c1-9d03-be061e1f565a?aff=1402395b-e1d6-4f46-9ea2-b41b2f405fa8",
    period: "ANO",
    isPromo: false,
    features: [
      "Acesso prioritário em horários de pico",
      "Modelos de raciocínio avançados",
      "Respostas mais rápidas e fluídas",
      "Geração de Imagens e Voz",
      "Site e App oficial OpenAI"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    icon: MessageSquare,
    colorClass: "bg-emerald-500/20",
    iconColorClass: "text-emerald-400"
  },
  {
    id: "chatgpt-private",
    name: "ChatGPT Plus Privado",
    oldPrice: "149,99",
    price: "67,00",
    paymentUrl: "https://pay.kirvano.com/a3665352-a5ea-4a59-b125-35906f5f7b00?aff=699ba46d-421a-4f5a-bebf-12a9911504ce",
    period: "ANO",
    isPromo: true,
    features: [
      "Ativação na sua própria conta",
      "Limites elevados GPT-5.5 Premium",
      "Deep Research e Análise de Arquivos",
      "Criação de GPTs Personalizados",
      "Suporte exclusivo 24/7"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    icon: Bot,
    colorClass: "bg-emerald-500/20",
    iconColorClass: "text-emerald-400"
  },
  {
    id: "capcut-pro",
    name: "CapCut PRO",
    price: "47,00",
    paymentUrl: "https://pay.kirvano.com/ce83c068-44db-45bf-b877-09dfd3430e7e?aff=6850ba6b-94b1-40dd-b349-cb6d3a10e9d1",
    period: "ANO",
    isPromo: false,
    features: [
      "Legendas e Dublagem via IA",
      "Estabilização e Motion Blur",
      "Filtros, Efeitos e Fontes Pro",
      "Músicas e Áudios Comerciais",
      "Retoque e Maquiagem Digital",
      "Acesso em 2 aparelhos (Celular+PC)"
    ],
    logoUrl: "https://cdn.worldvectorlogo.com/logos/capcut.svg",
    icon: Video,
    colorClass: "bg-sky-500/20",
    iconColorClass: "text-sky-400"
  },
  {
    id: "veo-gemini",
    name: "GEMINI PRO + VEO3 FLOW",
    oldPrice: "199,99",
    price: "97,00",
    paymentUrl: "https://pay.kirvano.com/b4b9e1db-6f05-431c-89a8-5d7e01b1a62e?aff=832c3ea5-742a-4543-a293-1a7bd3e19f0b",
    period: "ANO",
    isPromo: true,
    features: [
      "Vídeos Cinemáticos (Texto/Imagem)",
      "Cenas de 8s com Áudio Nativo",
      "Dublagem Natural em Português",
      "Controle de Câmera e Flow Pro",
      "Consistência Visual de Personagem"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Google_Gemini_logo.svg",
    icon: Sparkles,
    colorClass: "bg-purple-500/20",
    iconColorClass: "text-purple-400"
  },
  {
    id: "gemini-pro",
    name: "Gemini PRO",
    price: "67,00",
    paymentUrl: "https://pay.kirvano.com/ffacc950-43b2-48fa-b13b-904b7e900a8a?aff=5e4958c8-3df8-47c0-8790-1bd7a08fa79f",
    period: "ANO",
    isPromo: false,
    features: [
      "Deep Research e Análise PDFs",
      "Processamento de Grandes Volumes",
      "Canvas Interativo e Automações",
      "Integração Gmail/Drive/Docs",
      "Geração avançada Foto/Vídeo/Áudio"
    ],
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Google_Gemini_logo.svg",
    icon: Zap,
    colorClass: "bg-indigo-500/20",
    iconColorClass: "text-indigo-400"
  },
  {
    id: "spotify-premium",
    name: "Spotify Premium",
    oldPrice: "97,00",
    price: "67,00",
    paymentUrl: "https://pay.kirvano.com/327932d4-46d1-4912-a007-042192f2edb2?aff=54906b88-e01b-428e-be3b-8a1c1157b731",
    period: "ANO",
    isPromo: true,
    features: [
      "Música e podcasts sem anúncios",
      "Downloads p/ ouvir offline",
      "Pulos ilimitados e escolha de faixas",
      "Qualidade de áudio Premium",
      "Experiência completa sem limitações"
    ],
    logoUrl: "https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg",
    icon: Music,
    colorClass: "bg-green-500/20",
    iconColorClass: "text-green-400"
  },
  {
    id: "super-grok",
    name: "Super Grok",
    oldPrice: "499,00",
    price: "197,00",
    paymentUrl: "https://pay.kirvano.com/3722bff7-be65-4794-b798-30356da309d6?aff=1519cd20-ed38-470a-b96e-5b68a4f3bab8",
    period: "ANO",
    isPromo: true,
    features: [
      "Raciocínio superior p/ Tarefas Complexas",
      "Info real-time (Tendências do X)",
      "Criação de Imagens e Vídeos Pro",
      "Modo Voz Natural e DeepSearch",
      "Liberdade total nos comandos"
    ],
    logoUrl: "https://www.vectorlogo.zone/logos/x/x-icon.svg",
    icon: Infinity,
    colorClass: "bg-zinc-500/20",
    iconColorClass: "text-zinc-400"
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    price: "47,00",
    paymentUrl: "https://pay.kirvano.com/2fa6bd39-f9dc-4ebe-9dab-007c90602e6d?aff=0a9d4f6c-afaf-4769-983f-a2e8eb6c2ab6",
    period: "ANO",
    isPromo: false,
    features: [
      "No seu e-mail e conta pessoal",
      "Ferramentas Premium (Redimensionar/Remover)",
      "3,6M+ Modelos e 141M+ Assets Pro",
      "Não perde seus projetos antigos",
      "Acesso Total no Celular e PC"
    ],
    logoUrl: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    icon: Layout,
    colorClass: "bg-blue-500/20",
    iconColorClass: "text-blue-400"
  }
];

const faqs = [
  {
    q: "Como recebo meu acesso?",
    a: "O envio é imediato e automático! Você receberá todas as instruções detalhadas e o link de acesso diretamente no e-mail informado no momento da compra."
  },
  {
    q: "Os acessos são realmente válidos por 1 ano?",
    a: "Sim! Toda compra garante o direito de uso premium por até 1 ano (365 dias) a partir da data da sua compra, garantindo economia e estabilidade."
  },
  {
    q: "Preciso realizar renovações mensais?",
    a: "Sim, para manter o custo baixo e a qualidade alta, alguns produtos exigem uma renovação técnica mensal. Mas fique tranquilo: você não pagará nada extra por isso durante o seu ano de assinatura."
  },
  {
    q: "No ChatGPT Privado, perco o meu histórico?",
    a: "Você entrará em uma conta BUSINESS de alta performance. Como é uma conta nova dentro do nosso grupo empresarial, você terá um novo histórico privado. Seus dados antigos permanecem na sua conta gratuita anterior."
  },
  {
    q: "Como funciona o Chat GPT (Privado e Compartilhado)?",
    a: "Você terá acesso total tanto no seu celular quanto no seu PC utilizando o site e o aplicativo oficial da OpenAI. No Privado, a conta é exclusiva sua; no Compartilhado, você divide o acesso com outros membros mantendo sua organização."
  },
  {
    q: "Vou perder meus projetos no CapCut PRO?",
    a: "Não. Embora o acesso exija renovação técnica para manter o status PRO, todos os seus projetos salvos no seu dispositivo continuarão intactos e acessíveis. Você mantém sua criatividade sem interrupções."
  },
  {
    q: "Como funciona o acesso do Canva Pro?",
    a: "Diferente de outros, o Canva Pro é ativado diretamente no seu próprio e-mail e conta pessoal. Você entra para nossa equipe premium, não perde nenhum projeto antigo e pode usar simultaneamente no celular e no PC."
  },
  {
    q: "Terei suporte caso tenha algum problema?",
    a: "Com certeza! Nossa Central de Suporte funciona de Segunda a Sábado (09:00 – 22:00) e aos Domingos (09:00 – 12:00). Todos os clientes são respondidos com atenção por nossa equipe — basta aguardar sua vez na fila de atendimento."
  },
  {
    q: "Comprei e não gostei, posso pedir reembolso?",
    a: "Sim. Você tem direito a reembolso total em até 7 dias após a compra, conforme o Código de Defesa do Consumidor (CDC). O processo é realizado de forma segura diretamente pela plataforma onde você efetuou o pagamento (Pepper ou Kirvano)."
  }
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay.getTime() - now.getTime();
      
      if (difference <= 0) return { hours: 0, minutes: 0, seconds: 0 };

      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleActivation = () => {
    window.open("https://ativacaoapps.netlify.app/", "_blank");
  };

  const handleSupport = () => {
    window.open("https://centraldesuporteinfinity.lovable.app/", "_blank");
  };

  return (
    <div className="min-h-screen selection:bg-brand-emerald selection:text-white">
      {/* Ticker / Countdown */}
      <div className="bg-red-600 py-2 sticky top-0 z-[60]">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-4 text-black text-[10px] md:text-sm font-black uppercase tracking-tighter">
          <div className="flex items-center gap-1.5 animate-pulse">
            <Clock className="w-3.5 h-3.5" />
            AS OFERTAS DO DIA SE ENCERRAM EM:
          </div>
          <div className="flex gap-2 font-mono text-sm">
            <span className="bg-black text-white px-1.5 py-0.5 rounded">{timeLeft.hours.toString().padStart(2, "0")}h</span>
            <span className="bg-black text-white px-1.5 py-0.5 rounded">{timeLeft.minutes.toString().padStart(2, "0")}m</span>
            <span className="bg-black text-white px-1.5 py-0.5 rounded animate-pulse">{timeLeft.seconds.toString().padStart(2, "0")}s</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-[40px] md:top-[36px] w-full z-50 glass border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="w-6 h-6 md:w-8 md:h-8 bg-brand-emerald rounded-lg flex items-center justify-center">
              <Zap className="text-white w-4 h-4 md:w-5 md:h-5 fill-white" />
            </div>
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tighter uppercase whitespace-nowrap">ACESSOS<span className="text-brand-emerald">PREMIUM</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium opacity-70 hover:opacity-100 transition-opacity">
            <a href="#produtos" className="hover:text-brand-emerald">Produtos</a>
            <a href="#beneficios" className="hover:text-brand-emerald">Benefícios</a>
            <a href="#faq" className="hover:text-brand-emerald">FAQ</a>
          </div>
          <button 
            onClick={handleSupport}
            className="bg-brand-emerald hover:bg-emerald-600 px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            Central de Suporte
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[400px] h-[400px] bg-brand-emerald/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-brand-emerald mb-6 inline-block">
               Acesso Premium Desbloqueado
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-7xl font-black leading-[0.95] tracking-tighter mb-8 max-w-4xl mx-auto uppercase px-2">
              Chega de pagar caro todo mês em <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">assinatura de aplicativos</span>
            </h1>
            <p className="text-base md:text-xl opacity-80 max-w-2xl mx-auto mb-12 leading-relaxed font-medium px-4">
              Pague somente <span className="text-brand-emerald font-bold underline decoration-brand-emerald/30">1x por ano</span> e economize até 90%. Tenha acesso às melhores ferramentas do mundo sem mensalidades pesadas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-emerald text-white px-10 py-5 rounded-full font-black text-xl hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                APROVEITAR OFERTA AGORA
              </button>
              <button 
                onClick={handleActivation}
                className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all active:scale-95"
              >
                Já comprei, quero Ativar
              </button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale">
              <img src="https://www.vectorlogo.zone/logos/canva/canva-ar21.svg" alt="Canva" className="h-6" />
              <img src="https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg" alt="Spotify" className="h-6" />
              <img src="https://www.vectorlogo.zone/logos/openai/openai-ar21.svg" alt="OpenAI" className="h-6" />
              <img src="https://www.vectorlogo.zone/logos/google/google-ar21.svg" alt="Google" className="h-6" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Activation Banner */}
      <section className="bg-brand-emerald py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black font-black text-xl md:text-2xl tracking-tighter text-center md:text-left uppercase">
            FEZ A COMPRA? <span className="opacity-70">ATIVE SEU ACESSO AQUI:</span>
          </p>
          <button 
            onClick={handleActivation}
            className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            Portal de Ativação <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section id="produtos" className="py-16 md:py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <h2 className="font-display text-4xl md:text-7xl font-black tracking-tighter mb-4 uppercase">Ofertas <span className="text-brand-emerald">Exclusivas</span></h2>
              <p className="opacity-50 text-base md:text-lg">Selecione suas ferramentas favoritas e pare de pagar mensalidades hoje.</p>
            </div>
            <div className="flex items-center gap-3 bg-white/5 p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
              <div className="px-3 py-1.5 bg-brand-emerald text-[10px] md:text-xs font-bold rounded-xl whitespace-nowrap">OFERTAS ANUAIS</div>
              <div className="px-3 py-1.5 text-[10px] md:text-xs font-bold opacity-30 whitespace-nowrap">PAGAMENTO ÚNICO</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative glass rounded-[2.5rem] p-8 flex flex-col hover-glow transition-all duration-500 overflow-hidden"
              >
                {product.isPromo && (
                  <div className="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-tighter shadow-lg shadow-red-500/20">
                    OFERTA DO DIA
                  </div>
                )}
                
                <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-500 ${product.colorClass}`}>
                  {product.logoUrl ? (
                    <img 
                      src={product.logoUrl} 
                      alt={product.name} 
                      className="w-8 h-8 object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.classList.add('icon-visible');
                      }}
                    />
                  ) : (
                    <product.icon className={`w-8 h-8 ${product.iconColorClass}`} />
                  )}
                </div>

                <h3 className="font-display text-xl font-bold mb-4 leading-tight uppercase tracking-tight">{product.name}</h3>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs opacity-70 font-medium leading-snug">
                      <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-white/5">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-display font-black tracking-tighter">R$ {product.price}</span>
                    <span className="text-xs opacity-40">/{product.period}</span>
                  </div>
                  {product.oldPrice && (
                    <div className="flex items-center gap-2 mb-4 text-xs opacity-30 line-through">
                      De R$ {product.oldPrice}
                    </div>
                  )}
                  <button 
                    onClick={() => window.open(product.paymentUrl, "_blank")}
                    className="w-full bg-white text-black py-4 rounded-2xl font-bold text-sm tracking-wide group-hover:bg-brand-emerald group-hover:text-white transition-all transform group-active:scale-95 flex items-center justify-center gap-2"
                  >
                    GARANTIR ACESSO <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={handleSupport}
              className="inline-flex items-center gap-2 text-brand-emerald font-bold hover:underline py-4 px-8 rounded-full hover:bg-brand-emerald/5 transition-all uppercase text-sm tracking-widest"
            >
              Dúvidas sobre os planos? Fale com nosso suporte <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Star, title: "Qualidade Garantida", desc: "Acessos testados diariamente para garantir que você nunca fique sem produzir." },
              { icon: ShieldCheck, title: "Compra 100% Segura", desc: "Processamos pagamentos via Pepper ou Kirvano com máxima criptografia." },
              { icon: CreditCard, title: "Pagamento Único", desc: "Você paga apenas uma vez por ano e usa sem interrupções mensais." }
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <item.icon className="w-8 h-8 text-brand-emerald" />
                </div>
                <h4 className="font-display text-2xl font-bold mb-4">{item.title}</h4>
                <p className="opacity-50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass rounded-[3rem] p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 blur-[100px] -z-10" />
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-emerald/10 text-brand-emerald text-[10px] font-black uppercase tracking-widest mb-6">
              Oferta por tempo limitado
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">Pronto para economizar milhares de reais todos os meses?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-brand-emerald text-white px-12 py-5 rounded-full font-black text-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-brand-emerald/20"
              >
                ESCOLHER MINHAS FERRAMENTAS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">O que dizem nossos <span className="text-brand-emerald">alunos</span></h2>
            <p className="opacity-50 text-lg">Mais de 5.000 pessoas já economizaram com nossos acessos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2rem] relative group"
              >
                <Quote className="absolute top-6 right-8 w-8 h-8 text-brand-emerald/10 group-hover:text-brand-emerald/20 transition-colors" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-sm opacity-80 leading-relaxed mb-6 italic">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-emerald/20 flex items-center justify-center font-bold text-xs text-brand-emerald">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-[10px] opacity-40 uppercase font-black tracking-widest">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white/2">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-black text-center mb-16 underline decoration-brand-emerald/20 underline-offset-8 uppercase tracking-tighter">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-3xl overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-left">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-6 pt-2 opacity-60 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Seal */}
      <section className="py-16 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full"
          >
            <ShieldCheck className="w-5 h-5 text-brand-emerald" />
            <span className="text-xs md:text-sm font-black uppercase tracking-widest text-white/90">Selo de Qualidade & Garantia de 7 Dias</span>
          </motion.div>
          
          <p className="max-w-xl opacity-40 text-[10px] md:text-xs leading-relaxed font-medium">
            Atuamos em conformidade com o Artigo 49 do Código de Defesa do Consumidor brasileiro. Nossa garantia assegura que você receba exatamente o que foi contratado, com suporte técnico dedicado para sua total satisfação.
          </p>
        </div>
      </section>

      {/* Final Bottom Banner */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-black font-black text-2xl md:text-4xl tracking-tighter uppercase mb-6">
            Não deixe para amanhã <span className="text-brand-emerald underline underline-offset-4 decoration-black/5">sua produtividade</span>
          </p>
          <button 
            onClick={() => document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-emerald text-white px-12 py-5 rounded-full font-black text-xl hover:bg-emerald-600 transition-all shadow-xl shadow-brand-emerald/20 active:scale-95"
          >
            GARANTIR MINHA VAGA COM DESCONTO
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-emerald rounded flex items-center justify-center">
              <Zap className="text-white w-4 h-4 fill-white" />
            </div>
            <span className="font-display font-bold text-sm tracking-tighter uppercase">ACESSOS PREMIUM © 2026</span>
          </div>
          <div className="flex gap-8 text-xs opacity-40 font-medium">
            <a href="#" className="hover:opacity-100 transition-opacity">Termos de Uso</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Política de Privacidade</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Afiliados</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-black bg-brand-emerald flex items-center justify-center text-[10px] font-bold">FR</div>
              <div className="w-8 h-8 rounded-full border-2 border-black bg-brand-purple flex items-center justify-center text-[10px] font-bold">JD</div>
              <div className="w-8 h-8 rounded-full border-2 border-black bg-brand-blue flex items-center justify-center text-[10px] font-bold">+5k</div>
            </div>
            <span className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Alunos Ativos</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
