import { ShieldCheck, Award, FileCheck, Building } from "lucide-react";

const certifications = [
  { name: "Suruhanjaya Syarikat Malaysia (SSM)", status: "Valid" },
  { name: "Kementerian Kewangan Malaysia - Syarikat", status: "29/01/2028" },
  { name: "Kementerian Kewangan Malaysia - Taraf Bumiputera", status: "29/01/2028" },
  { name: "CIDB Malaysia - SPKK", status: "08/01/2027" },
  { name: "CIDB Malaysia - SPK (G7 B, CE, ME)", status: "08/01/2027" },
  { name: "Suruhanjaya Tenaga - Kelas A", status: "14/09/2028" },
  { name: "Tenaga Nasional Berhad - KKM Pembekal & Kontraktor", status: "29/01/2028" },
  { name: "Tenaga Nasional Berhad - Kontraktor Kerja (G7)", status: "08/01/2027" },
  { name: "Telekom Malaysia Berhad", status: "20/06/2027" },
  { name: "Celcom Malaysia Berhad", status: "Valid" },
  { name: "Lembaga Hasil Dalam Negeri", status: "Valid" },
  { name: "Kementerian Sumber Manusia", status: "Valid" },
  { name: "Jabatan Perdana Menteri", status: "Valid" },
  { name: "Universiti Putra Malaysia", status: "Valid" },
  { name: "Hospital Universiti Kebangsaan Malaysia (HUKM)", status: "Valid" },
  { name: "Jabatan Kerja Raya Malaysia (JKR)", status: "Valid" },
  { name: "Dewan Bandaraya Kuala Lumpur (DBKL)", status: "Valid" },
  { name: "Pusat Perubatan Universiti Malaya (PPUM)", status: "Valid" },
  { name: "Ranhill Engineers And Construction Sdn Bhd", status: "Valid" },
  { name: "Gema Insan Sdn Bhd - Prolintas (SUKE TP3)", status: "Valid" },
];

export default function CertificationsPage() {
  return (
    <div className="pt-24 pb-20 bg-light min-h-screen">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Certifications & Registrations</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We are a fully registered and certified Bumiputera contractor with various government and private agencies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="bg-blue-50 p-3 rounded-full text-primary shrink-0">
                {idx % 3 === 0 ? <ShieldCheck size={24} /> : idx % 3 === 1 ? <Award size={24} /> : <FileCheck size={24} />}
              </div>
              <div>
                <h3 className="font-bold text-dark text-sm">{cert.name}</h3>
                <p className="text-xs text-gray-500 mt-1">Expiry: {cert.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}