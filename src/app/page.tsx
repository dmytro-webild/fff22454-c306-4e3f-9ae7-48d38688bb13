"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { Award, ArrowRight, Calendar, CheckCircle, Handshake, Palette, Phone, Shield, Sparkles, Star, Trophy, Wrench, Zap } from 'lucide-react';

export default function LandingPage() {
  const navItems = [
    { name: "Soluções", id: "solutions" },
    { name: "Diferencias", id: "differentials" },
    { name: "Credenciais", id: "credentials" },
    { name: "Novve", id: "novve" }
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Lanco"
          navItems={navItems}
          button={{
            text: "> Fale com um especialista",            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="O mobiliário completo para o seu hospital."
          description="30 anos fabricando as melhores soluções. ISO 13485. Premiada em design e inovação."
          tag="Excelência Hospitalar"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          leftCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-defocused-shopping-mall_74190-5979.jpg",              imageAlt: "Hospital furniture showcase"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/luxury-lounge-area-hotel-reception_482257-78350.jpg",              imageAlt: "Premium medical furniture"
            }
          ]}
          rightCarouselItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/revealing-shot-orthodontic-chair-with-nobody-teeth-x-ray-images-modern-display_482257-14035.jpg",              imageAlt: "Surgical equipment furniture"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/scientist-woman-blue-suit-looking-tablet-standing-stairs_645730-23.jpg",              imageAlt: "Hospital mobility solutions"
            }
          ]}
          buttons={[
            {
              text: "> Fale com um especialista",              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/serious-inspector_1098-14750.jpg", alt: "Hospital administrator" },
            { src: "http://img.b2bpic.net/free-photo/high-angle-female-nurse_23-2148501058.jpg", alt: "Nursing director" },
            { src: "http://img.b2bpic.net/free-photo/woman-medic-examining-male-patient-office-routine-checkup-discussing-about-treatment-plan_482257-135628.jpg", alt: "Hospital director" },
            { src: "http://img.b2bpic.net/free-photo/mid-adult-doctor-monitoring-oxygen-therapy-hyperbaric-chamber-looking-camera-while-sitting-control-room_637285-370.jpg", alt: "Healthcare coordinator" }
          ]}
          avatarText="Confiado por centenas de hospitais brasileiros"
          carouselPosition="right"
        />
      </div>

      <div id="transformation" data-section="transformation">
        <FeatureCardThree
          title="Seu hospital merece mais."
          tag="Antes vs Depois"
          tagIcon={ArrowRight}
          tagAnimation="slide-up"
          description="A diferença entre equipamento inadequado e soluções premium é visível em cada detalhe: segurança, eficiência e durabilidade."
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          features={[
            {
              id: "before",              title: "Antes: O que não funciona",              description: "Suportes adaptados. Carrinhos que travam. Estativas instáveis. Manutenção constante.",              imageSrc: "http://img.b2bpic.net/free-photo/friends-having-covid-party-using-technology_23-2149416745.jpg",              imageAlt: "Cluttered hospital workspace"
            },
            {
              id: "after",              title: "Depois: A solução Lanco",              description: "Posto organizado. Circulação livre. Equipamento que dura. Equipe mais eficiente e segura.",              imageSrc: "http://img.b2bpic.net/free-photo/medical-ventilator-being-monitored-by-anaesthetist-surgeon-using-monitor-operating-room_657921-1091.jpg",              imageAlt: "Organized modern hospital"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            {
              text: "> Conheça as soluções",              href: "#solutions"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="credentials" data-section="credentials">
        <MetricCardOne
          title="Por que os maiores hospitais do Brasil escolhem a Lanco"
          tag="Credenciais & Números"
          tagIcon={Award}
          tagAnimation="slide-up"
          description="Três décadas de inovação, qualidade certificada e reconhecimento nacional."
          gridVariant="uniform-all-items-equal"
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={true}
          metrics={[
            {
              id: "years",              value: "30+",              title: "Anos de mercado",              description: "Fabricação própria em Boituva, SP. Do projeto à entrega, tudo sob controle.",              icon: Calendar
            },
            {
              id: "iso",              value: "ISO 13485:2016",              title: "Certificação de Qualidade",              description: "Sistema de gestão da qualidade específico para produtos de saúde, implementado desde 2008.",              icon: CheckCircle
            },
            {
              id: "award",              value: "TOP Hospitalar",              title: "Prêmio Nacional",              description: "Reconhecida nacionalmente em mobiliário e cuidados ao paciente.",              icon: Trophy
            },
            {
              id: "design",              value: "Museu da Casa Brasileira",              title: "Prêmio Design",              description: "Quando engenharia e design se encontram, o hospital funciona melhor.",              icon: Palette
            },
            {
              id: "compliance",              value: "Conformidade Total",              title: "Regulamentações",              description: "ANVISA (RDC 16/2013). INMETRO. IEC 60601. IEC 62366.",              icon: Shield
            }
          ]}
          buttons={[
            {
              text: "> Fale com um especialista",              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="solutions" data-section="solutions">
        <ProductCardThree
          title="Soluções para cada setor do hospital."
          tag="Especialização por Área"
          tagIcon={Zap}
          tagAnimation="slide-up"
          description="Cada departamento hospitalar tem necessidades únicas. Nossas soluções são projetadas para cada realidade."
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
          products={[
            {
              id: "enfermagem",              name: "Enfermagem",              price: "> Ver soluções",              imageSrc: "http://img.b2bpic.net/free-vector/flat-greeting-cards-collection-world-health-day-awareness_23-2151317662.jpg",              imageAlt: "Nursing solutions"
            },
            {
              id: "cirurgico",              name: "Centro Cirúrgico",              price: "> Ver soluções",              imageSrc: "http://img.b2bpic.net/free-photo/many-kind-medical-equipment-manage-surgeon-start-operations-operating-room_1301-7802.jpg",              imageAlt: "Surgical center solutions"
            },
            {
              id: "farmacia",              name: "Farmácia Hospitalar",              price: "> Ver soluções",              imageSrc: "http://img.b2bpic.net/free-photo/plant-picture-big-clean-room-with-chrome-ladder_645730-179.jpg",              imageAlt: "Hospital pharmacy solutions"
            },
            {
              id: "uti",              name: "UTI",              price: "> Ver soluções",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-waving-video-call-smartphone-hospital-ward-bed-patient-with-iv-drip-bag-oximeter-using-online-remote-conference-internet-talk-friends-recovering_482257-27450.jpg",              imageAlt: "ICU solutions"
            },
            {
              id: "cme",              name: "CME",              price: "> Ver soluções",              imageSrc: "http://img.b2bpic.net/free-photo/nurse-hand-packing-dental-instrument-plastic-bag_23-2147862117.jpg",              imageAlt: "Central sterilization solutions"
            }
          ]}
          buttons={[
            {
              text: "> Explorar todas as soluções",              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="differentials" data-section="differentials">
        <FeatureCardThree
          title="Projetado para durar. Construído para facilitar."
          tag="Diferenciais Técnicos"
          tagIcon={Wrench}
          tagAnimation="slide-up"
          description="Cada projeto é uma solução completa: modular, customizável, fabricada com materiais de alta performance e tecnologia certificada."
          gridVariant="bento-grid"
          animationType="blur-reveal"
          features={[
            {
              id: "modular",              title: "Projetos modulares e flexíveis",              description: "Adaptam-se ao layout do seu hospital com velocidade.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-checking-pilates-equipment_23-2150778131.jpg",              imageAlt: "Modular furniture system"
            },
            {
              id: "customization",              title: "Customização real",              description: "Cada projeto pode ser ajustado ao espaço, ao fluxo e à necessidade da sua operação.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-checking-pilates-equipment_23-2150778131.jpg",              imageAlt: "Customizable solutions"
            },
            {
              id: "materials",              title: "Materiais de alta performance",              description: "Aço inox, Superfície sólido Mineral (SSM), ABS antibacteriano, PEAD. Fáceis de higienizar, resistentes ao uso intenso.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-checking-pilates-equipment_23-2150778131.jpg",              imageAlt: "High performance materials"
            },
            {
              id: "technology",              title: "Tecnologia com origem alemã",              description: "Desenvolvimento com base em parcerias técnicas por vários anos com Knurr, Provita e Steinco.",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-man-checking-pilates-equipment_23-2150778131.jpg",              imageAlt: "German technology partnership"
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            {
              text: "> Solicite um projeto",              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="novve" data-section="novve">
        <TextAbout
          tag="Parceria Oficial"
          tagIcon={Handshake}
          tagAnimation="slide-up"
          title="A Novve é representante oficial da Lanco desde 2007.\n\n19 anos de parceria contínua. Conhecendo cada produto, cada aplicação, cada detalhe técnico. Com suporte real, em qualquer lugar do Brasil."
          useInvertedBackground={false}
          buttons={[
            {
              text: "> Fale com a Novve",              href: "#contact"
            }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Dr. Carlos Mendes",              imageSrc: "http://img.b2bpic.net/free-photo/serious-inspector_1098-14750.jpg",              imageAlt: "Hospital director"
            },
            {
              id: "2",              name: "Enfermeira Ana Silva",              imageSrc: "http://img.b2bpic.net/free-photo/high-angle-female-nurse_23-2148501058.jpg",              imageAlt: "Nursing director"
            },
            {
              id: "3",              name: "Dr. Roberto Alves",              imageSrc: "http://img.b2bpic.net/free-photo/woman-medic-examining-male-patient-office-routine-checkup-discussing-about-treatment-plan_482257-135628.jpg",              imageAlt: "Hospital physician"
            },
            {
              id: "4",              name: "Fernanda Costa",              imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-doctor-monitoring-oxygen-therapy-hyperbaric-chamber-looking-camera-while-sitting-control-room_637285-370.jpg",              imageAlt: "Healthcare coordinator"
            },
            {
              id: "5",              name: "Dr. Paulo Rizzo",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-doctor-with-intern_329181-9234.jpg",              imageAlt: "Surgical team member"
            },
            {
              id: "6",              name: "Marisa Oliveira",              imageSrc: "http://img.b2bpic.net/free-photo/nurses-getting-ready-work-day_23-2149309973.jpg",              imageAlt: "ICU nurse"
            }
          ]}
          cardTitle="Vamos estruturar o mobiliário do seu hospital do jeito certo."
          cardTag="Confiança Comprovada"
          cardTagIcon={Star}
          cardAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Conversar com um especialista"
          ctaDescription="Fale com a Lanco hoje e descubra como nossas soluções podem transformar a infraestrutura do seu hospital."
          ctaButton={{
            text: "> Conversar agora",            href: "https://wa.me/5511999999999"
          }}
          ctaIcon={Phone}
          useInvertedBackground={false}
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            {
              id: "1",              title: "Como funciona o processo de customização?",              content: "Nossos especialistas analisam o layout do seu hospital, necessidades específicas e fluxo operacional. Criamos um projeto 100% customizado que se adapta perfeitamente ao seu espaço."
            },
            {
              id: "2",              title: "Qual é o prazo de entrega?",              content: "Os prazos variam conforme a complexidade do projeto. Normalmente, após aprovação do projeto, a fabricação leva entre 60 a 90 dias, mais o tempo de instalação."
            },
            {
              id: "3",              title: "Vocês oferecem garantia?",              content: "Sim. Todos os produtos Lanco são fornecidos com garantia de 12 meses contra defeitos de fabricação, com possibilidade de extensão."
            },
            {
              id: "4",              title: "Os materiais são fáceis de higienizar?",              content: "Absolutamente. Usamos aço inox, superfícies sólido mineral e ABS antibacteriano - todos os materiais são de fácil limpeza e altamente resistentes a desinfetantes hospitalares."
            },
            {
              id: "5",              title: "Vocês fazem projetos para reformas parciais?",              content: "Sim. Podemos trabalhar com reformas completas ou parciais. Analisamos sua situação atual e propomos soluções que se integrem perfeitamente à sua infraestrutura existente."
            },
            {
              id: "6",              title: "Como é o suporte técnico após a entrega?",              content: "A Novve oferece suporte técnico contínuo em qualquer lugar do Brasil. Temos 19 anos de parceria com a Lanco e conhecimento completo de toda a linha de produtos."
            }
          ]}
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSimple
          columns={[
            {
              title: "Empresa",              items: [
                { label: "Sobre a Lanco", href: "#" },
                { label: "História", href: "#" },
                { label: "Prêmios", href: "#" },
                { label: "Carreira", href: "#" }
              ]
            },
            {
              title: "Soluções",              items: [
                { label: "Enfermagem", href: "#solutions" },
                { label: "Centro Cirúrgico", href: "#solutions" },
                { label: "Farmácia", href: "#solutions" },
                { label: "UTI", href: "#solutions" }
              ]
            },
            {
              title: "Suporte",              items: [
                { label: "Contato", href: "#contact" },
                { label: "FAQ", href: "#contact" },
                { label: "Documentação", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Política de Privacidade", href: "#" },
                { label: "Termos de Uso", href: "#" },
                { label: "LGPD", href: "#" },
                { label: "Cookies", href: "#" }
              ]
            }
          ]}
          bottomLeftText="© 2024 Lanco - Móveis Hospitalares. Todos os direitos reservados. Fabricação própria em Boituva, SP."
          bottomRightText="Ao clicar em qualquer botão de contato você concorda que os dados pessoais fornecidos serão utilizados para envio de conteúdo informativo, analítico e publicitário sobre produtos, serviços e assuntos gerais, nos termos da Lei Geral de Proteção de Dados (LGPD). Ao continuar com seu cadastro, você autoriza a coleta de seus dados pessoais de acordo com nossa Política de Privacidade."
        />
      </div>
    </ThemeProvider>
  );
}