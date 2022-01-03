import React from "react";
import { Accordion } from "react-bootstrap";

const Questions = () => {
  return (
    <div className="container d-flex flex-column">
      <div className="my-3 text-center">
        <h1>ASK YOUR UNKNOWN QUESTIONS</h1>
        <p className="text-muted p-1">
          Here you can find our top frequently asked questions. Please let us
          know if you have any queries regarding our mining platform and FAQs.
        </p>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="bg-success">
            What is Cryptocurrency?
          </Accordion.Header>
          <Accordion.Body className="text-sec">
            Cryptocurrency is decentralized digital money, based on blockchain
            technology. You may be familiar with the most popular versions,
            Bitcoin and Ethereum, but there are more than 5,000 different
            cryptocurrencies in circulation, according to CoinLore.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is crypto currency mining?</Accordion.Header>
          <Accordion.Body className="text-sec">
            In a nutshell, cryptocurrency mining is a term that refers to the
            process of gathering cryptocurrency as a reward for work that you
            complete.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Why do people crypto mine?</Accordion.Header>
          <Accordion.Body className="text-sec">
            For some, they’re looking for another source of income. For others,
            it’s about gaining greater financial freedom without governments or
            banks butting in. But whatever the reason, cryptocurrencies are a
            growing area of interest for technophiles, investors, and
            cybercriminals alike.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How can i withdraw my earning balance?
          </Accordion.Header>
          <Accordion.Body className="text-sec">
            Miners can withdraw their mining coins. We processed withdrawals
            manually so it will take more time.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How does CoinSignalPro Insurance work and how does it protect miners
            assets and machines?
          </Accordion.Header>
          <Accordion.Body className="text-sec">
            The insurance has a lite token fee and covers everything including
            fees, it gives you 20% of any fee or deposit. The insurance earns
            you tokens that are paid and the application is flexible to enable
            every miner have full access to this funds and take care of his/her
            Coinsignal maintenance.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Questions;
