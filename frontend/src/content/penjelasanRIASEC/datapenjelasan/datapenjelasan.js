import React from "react";
import "./datapenjelasan.css";

function DataPenjelasan() {
  return (
    <div className="datapenjelasan-main-box">
      <div className="herosection-penjelasan">
        <div className="isi-herosection">
          <h1 className="header-herosection">RIASEC</h1>
        </div>
      </div>
      <div className="main-content-box">
        <div className="penjelasan-riasec">
          <h1 className="header-penjelasan">Apa Itu RIASEC?</h1>
          <p className="paragraf-penjelasan">
            RIASEC merupakan salah satu tes psikologi yang digunakan untuk
            menentukan kepribadian seseorang, dimana memiliki enam (6) jenis
            kepribadian sesuai dengan namanya tes ini yaitu RIASEC yang
            merupakan kepanjangan dari Realistik, Investigative, Artistic,
            Social, Enterprising, dan Conventional
          </p>
        </div>
      </div>
      <div className="pembagian-riasec">
        <h1 className="header-pembagian">Pembagian Kepribadian RIASEC</h1>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Realistik (Realistic)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih lapangan kerja
            yang akan berorientasi terhadap penerapan, manipulasi eksplisit,
            teratur, atau sistematik terhadap objek-objek, berbagai macam alat,
            dan mesin-mesin. Tidak akan menyukai aktivitas yang memberi bantuan
            atau Pendidikan.
          </p>
        </div>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Intelektual (Intellectual)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih pekerjaan yang
            bersifat akademik, dimana memiliki kecenderungan dalam memecahkan
            suatu masalah, berorientasi pada tugas, tidak memiliki jiwa sosial
            yang tinggi, ditandai dengan orang yang memerlukan berbagai
            kemampuan abstrak dan kreatif.
          </p>
        </div>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Artistik (Artistic)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih pekerjaan yang
            berhubungan dengan orang lain secara tidak langsung, bersifat sosial
            dan sulit untuk menyesuaikan diri, ditandai dengan orang yang
            memeperlukan interpretasi atau kreasi bentuk-bentuk artistik dalam
            menyelesaikan masalah. Orang yang lebih bebas, dan tidak
            tersistematis dalam menciptakan suatu produk artistik.
          </p>
        </div>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Sosial (Social)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih pekerjaan yang
            akan melibatkan ativitas dengan orang lain, dengan maksud membantu,
            mengajar, atau menyediakan bantuan. Tidak menyukai aktivitas yang
            rutin dan sistematik yang melibatkan objek dan materi-materi. Akan
            menganggap dirinya kompeten dalam membantu dan mengajar orang lain
            serta menilai tinggi aktifitas-aktifitas hubungan sosial.
          </p>
        </div>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Usaha (Enterpreneur)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih pekerjaan yang
            melibatkan manipulasi terhadap orang lain untuk masalah ekonomik
            atau tujuan-tujuan organisasi. Tidak menyukai aktifitas yang
            sistemastis, abstrak, dan ilmiah. Kompetensi kepemimpinan,
            persuasive, dan yang ilmiah akan di abaikan.
          </p>
        </div>
        <div className="pembagian1">
          <h1 className="header-pembagian1">Konvensional (Conventional)</h1>
          <p className="penjelasan-pembagian1">
            Kepribadian ini memiliki kecenderungan dalam memilih pekerjaan yang
            melibatkan ativitas memerlukan manipulasi data yang eksplisit,
            teratur, dan sistematik guna untuk memberikan kontribusi terhadap
            tujuan organisasi. Tidak akan menyukai aktifitas yang tidak pasti,
            bebas, dan tidak sistematik.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DataPenjelasan;
