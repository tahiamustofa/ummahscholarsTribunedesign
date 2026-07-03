import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSlider from "@/components/AboutSlider";

export default function AboutPage() {
  const goldColor = "#C5A059";

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Slider */}
      <AboutSlider />

      {/* About Content */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">

         

          {/*left Content */}
          <div className="lg:col-span-3">
            <h1
              className="text-4xl font-serif text-right font-bold mb-6 pb-2 border-b"
              style={{
                color: "#1A1A1A",
                borderColor: `${goldColor}33`,
              }}
            >
              <span style={{ color: goldColor }}>
                منبر أعلام الأمة (Ummah Scholars Tribune-UST)
              </span>
            </h1>

            <p className="text-gray-900 text-lg leading-9 text-right">
              منصة علمية وفكرية عالمية تُعنى ببناء المعرفة الرصينة، وتعزيز الوعي
              المسؤول، وإبراز إسهامات علماء الأمة، برؤيةٍ حضاريةٍ تجمع أصالة
              .التراث، وعمق البحث، واحترافية الطرح، واستشراف المستقبل
              
              تُقدِّم البحوث والدراسات، والمقالات، والفتاوى، والأخبار
              والفعاليات، والمبادرات، وفق منهجيةٍ راسخة، ومعاييرَ عاليةٍ من
              الموثوقية والجودة؛ لتُنتج معرفةً رصينة، وتنمّي وعيًا رشيدًا، وتصنع
              أثرًا علميًا وفكريًا مستدامًا
              
            
              وتطمح إلى أن تكون مرجعًا عالميًا موثوقًا للعلم والفكر، وصوتًا
              أمينًا لعلماء الأمة، وحاضنةً للمبادرات النوعية، تُسهم في خدمة
              الإنسان، وتعزيز القيم، وإثراء الحضارة بالكلمة الصادقة، والعلم
              النافع والرؤية البصيرة
            </p>
          </div>

           {/* right Image */}
          <div className="lg:col-span-2 flex justify-center">
            <Image
              src="/logo.jpeg"
              alt="Ummah Scholars Tribune"
              width={420}
              height={420}
              className="w-full max-w-[380px] h-auto object-contain rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Editor Section */}
        

         <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-16">

          {/* Left content*/}
          
          <div className="lg:col-span-3">
            <h1
              className="text-4xl font-serif text-right font-bold mb-6 pb-2 border-b"
              style={{
                color: "#1A1A1A",
                borderColor: `${goldColor}33`,
              }}
            >
              <span style={{ color: goldColor }}>
                رئيس التحرير/Editor-in-Chief of UST
د. زبير سلطان ربّاني 

              </span>
            </h1>

            <p className="text-gray-900 text-lg leading-9 text-right">
               كاتب في الفكر الإسلامي، وقضايا الإنسان، والتحولات الحضارية
            ومؤسس منبر أعلام الأمة (Ummah Scholars Tribune-UST)
            حاصل على الدكتوراه في اللغة العربية وعلومها
            والدكتوراه في التفسير وعلوم القرآن الكريم، والدكتوراه في الشريعة والقانون،
             والدكتوراه في الفقه وأصوله الفقه
            وله إسهامات علمية وفكرية في التأليف، والبحث، والكتابة، وإطلاق المبادرات الأكاديمية والإعلامية والمجتمعية
            رؤيةٍ حضاريةٍ تُعلي قيمة الإنسان، وتربط أصالة المعرفة بمتطلبات الواقع
                      

                         </p>
          </div>

          {/* right image  */}
<div className="lg:col-span-2 flex justify-center">
            <Image
              src="/editor.jpeg"
              alt="Ummah Scholars Tribune"
              width={420}
              height={420}
              className="w-full max-w-[380px] h-auto object-contain rounded-xl shadow-lg"
              priority
            />
          </div>

        </div>

      </div>
    </main>
  );
}