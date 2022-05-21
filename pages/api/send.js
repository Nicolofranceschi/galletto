import sendgrid from "@sendgrid/mail";
import { toArray } from 'streamtoarray';

const PDFDocument = require("pdfkit");

if (!process.env.SENDGRID_API_KEY) throw new Error("Sendgrid API key not found.");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {

  const { DA_Email } = req.body;

  const doc = new PDFDocument({ size: "A4" });
  doc.fontSize(12);
  doc.font('Helvetica-Bold')
  doc.text("Galletto Sport Academy  ssd  a  rl");
  doc.font('Helvetica')
  doc.fontSize(6);
  doc.text("Via Ambrogini, 5   -  40022 Castel del Rio   BO");
  doc.text("CF & P.IVA: 03812341208  -  Sdi: P62QHVQ");
  doc.text("Mail: info@gallettosport.it");
  doc.text("Pec: gallettosporacademy@pec.it");
  doc.fontSize(20);
  doc.font('Helvetica-Bold')
  doc.moveDown(1);
  doc.text("MODULO A - Domanda di tesseramento");
  doc.fontSize(12);
  doc.moveDown(1);
  doc.text("IL/LA SOTTOSCRITTO/A");
  doc.moveDown(0.2);
  doc.fontSize(10);
  doc.text("Franceschi Nicolò nato a Imola (BO) il 09/06/2001 ");
  doc.text("Residente in Via Ponte Alidosi 15 B , Castel del Rio (BO) , 40022");
  doc.text("Codice Fiscale: 03812341208");
  doc.text("Cellulare: 03812341208");
  doc.text("E-mail: franceschinicolo@gmail.com");
  doc.fontSize(12);
  doc.moveDown(1);
  doc.text("IN QUALITA' DI ESERCENTE LA RESPONSABILITA' GENITORIALE CHIEDE CHE IL SEGUENTE MINORE");
  doc.moveDown(0.2);
  doc.fontSize(10);
  doc.text("Franceschi Nicolò nato a Imola (BO) il 09/06/2001 ");
  doc.text("Residente in Via Ponte Alidosi 15 B , Castel del Rio (BO) , 40022");
  doc.text("Codice Fiscale: 03812341208");
  doc.moveDown(1);
  doc.fontSize(12);
  doc.text("SIA ISCRITTO ALLA GALLETTO SPORT ACCADEMY SSD a RL");
  doc.moveDown(0.2);
  doc.fontSize(7);
  doc.font('Helvetica')
  doc.text("DICHIARA INOLTRE DI ESSERE A CONOSCENZA CHE SARÀ TESSERATO PER L’ASI-ASSOCIAZIONI SPORTIVE E SOCIALI ITALIANE, SU RICHIESTA SOTTOSCRITTA E INOLTRATA PER IL TRAMITE DELLA SOCIETÀ SPORTIVA DILETTANTISTICA GALLETTO SPORT ACADEMY SSD A RL, PER LA QUALE INTENDE SVOLGERE L’ATTIVITÀ SPORTIVA. DICHIARA, DI AVER PRESO VISIONE DELLO STATUTO SOCIALE E DEL REGOLAMENTO INTERNO. DICHIARA, ALTRESÌ DI ACCETTARE E DI RISPETTARE INTEGRALMENTE LO STATUTO SOCIALE ED IL REGOLAMENTO, CONDIVIDENDONE LE FINALITÀ ISTITUZIONALI ED I VALORI",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.fontSize(12);
  doc.moveDown(1);
  doc.text("Manifestazione del consenso (art. 7 Regolamento UE n. 2016/679)");
  doc.fontSize(7);
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text("IO SOTTOSCRITTO/A, LETTA L’INFORMATIVA EX ART 13 DEL REGOLAMENTO UE 2016/679, DICHIARO DI ESSERE STATO INFORMATO SULLE FINALITÀ E LE MODALITÀ DI TRATTAMENTO CUI SONO DESTINATI I DATI, I SOGGETTI A CUI GLI STESSI POTRANNO ESSERE COMUNICATI, ANCHE IN QUALITÀ DI INCARICATI, NONCHÉ SUI DIRITTI DI ACCESSO AI DATI PERSONALI FORNITI CON FACOLTÀ DI CHIEDERNE L’AGGIORNAMENTO, LA RETTIFICA, L’INTEGRAZIONE E LA CANCELLAZIONE O OPPORSI ALL’INVIO DI COMUNICAZIONI COMMERCIALI. PER QUANTO SOPRA ESPRIMO IL MIO CONSENSO AL TRATTAMENTO DEI MIEI DATI PERSONALI NELLE MODALITÀ E PER LE FINALITÀ STRETTAMENTE CONNESSE E STRUMENTALI AI FINI STATUTARI DELLA SOCIETÀ.E",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text("QUANTO AL TRATTAMENTO EVENTUALE DEI MIEI DATI MEDICI, DA SVOLGERSI IN CONFORMITÀ A QUANTO INDICATO NELLA BACHECA DELL’ENTE SPORTIVO E NELLA SUDDETTA INFORMATIVA, CHE POTREBBERO VENIRE RICHIESTI AI SOLI FINI DELLO SVOLGIMENTO DA PARTE MIA DELL’ATTIVITÀ SPORTIVA (AGONISTICA E NON).",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text("QUANTO, INFINE, ALLA RIPRESA DI IMMAGINI E DI VIDEO DURANTE GLI EVENTI SPORTIVI CUI L’ENTE PARTECIPA, IN MERITO ALL’AUTORIZZAZIONE AD ESSERE RIPRESO IN IMMAGINI E VIDEO, NONCHÉ IN MERITO ALLA PUBBLICAZIONE DELLE IMMAGINI SCATTATE E DEI VIDEO RIPRESI IN TALI OCCASIONI, SUI SITI WEB E SUI SOCIAL, IL TUTTO SEMPRE IN CONFORMITÀ A QUANTO INDICATO NELLA BACHECA DELL’ENTE SPORTIVO E NELLA SUDDETTA INFORMATIVA.",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text("QUANTO ALLA PUBBLICAZIONE SUI SITI WEB E SUI SOCIAL, DELLE STESSE FOTOGRAFIE E VIDEO, CON MODALITÀ DI RICONOSCIMENTO, CONTRASSEGNATURA E TAGGATURA DELLE IMMAGINI, COSÌ DA RIPORTARE AVVISO PUBBLICO DEL MATERIALE PUBBLICATO NELLE PAGINE PERSONALI DEL TESSERATO SUL SOCIAL NETWORK.",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text("FIRMANDO LA PRESENTE DICHIARO DI AVER LETTO ATTENTAMENTE IL CONTENUTO DELL’INFORMATIVA FORNITA AI SENSI DEL REGOLAMENTO UE N° 2016/679 E DI AVERNE RICEVUTO COPIA. INOLTRE MI IMPEGNO A LEGGERE QUANTO VERRÀ PUBBLICATO E SPECIFICATO NELLA BACHECA DELL’ENTE IN MERITO ALLO SVOLGIMENTO DEGLI EVENTI SPORTIVI CUI L’ENTE DECIDERÀ DI ADERIRE E AD EVENTUALE ULTERIORE NECESSARIA INFORMATIVA PRIVACY E RACCOLTA DI CONSENSO. MI IMPEGNO ALTRESÌ A COMUNICARE TEMPESTIVAMENTE LE EVENTUALI VARIAZIONI DEI DATI.",{
    align: 'justify'
  });
  doc.moveDown(0.1);
  doc.font('Helvetica-Bold')
  doc.text('Accetto')
  doc.moveDown(1);
  doc.font('Helvetica')
  doc.text('Sab 21 Maggio 2020 14:35', 430, 750)
  doc.end(); 
 
    try {
      const array = await toArray(doc);
      var buffer = Buffer.concat(array).toString('base64')
      await sendgrid.send({
        to: DA_Email,
        from: `Galletto Sport Accademy <info@pineappsrl.com>`,
        text: "Hello world!",
        subject: "Pineapp's - Your password",
        attachments: [
          {
            content: buffer, // base 64
            filename: "attachment.pdf",
            type: "application/pdf",
            disposition: "attachment",
          },
        ],
      });
      return res.status(200).json({ error: null });
    } catch (error) {
      console.log(error.message);
      return res.status(error.code || 500).json({ error: error.message });
    }
 

  
}
