/* eslint-disable max-len */
import * as React from "react";
import { PageProps } from "gatsby";
import { Container, Spacing } from "@naturacosmeticos/natds-web";
import { Layout } from "../layouts";
import { Hero } from "../components/Hero";
import { BenefitsSection } from "../components/BenefitsSection";
import { EarningsSection } from "../components/EarningsSection";
import { OurCausesSection } from "../components/OurCausesSection";
import { HelpSection } from "../components/HelpSection";
import { Footer } from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => <Layout>
  <Container>
    <Spacing marginTop={"small"} />
    <Hero />
    <Spacing marginTop={"large"} />
    <BenefitsSection/>
    <EarningsSection />
    <OurCausesSection />
    <HelpSection />
  </Container>
  <Footer/>
</Layout>;

export default IndexPage;
