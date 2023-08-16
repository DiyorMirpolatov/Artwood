import React from "react";
import MahCom from "./mahCom";
import "../pages/home.css";

function Mahsulotlar() {
  let laganlar = [
    {
      name: "Naqshli lagan",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8y9K9MNpm6i6DXXd6IL9j3ghoMYuzGmKrGjAL4eV1YbhUhZE1_36fpmRhGbfL3y8O8DrHK0OwIUg0TKsPWbOPzfGSAeGs3kvIEI_-NOsbFo-z-JDkbT_s7qSTU3TzFBePyQka4i9rmejd4sIuCOapHt7VgqBzW-n1dG4JzXPtbo-vCok-0otS-RbnWdarIdugqm4XXNwHjvOfnrgFOZJJaGFcTWATqlGku3w5HtFyV87Ayw1Ac7_ncRyvGbRRA_denI741zUHsGPJbTNpKgBwEpvtDPH4SwQORDvbQzsrS3KSvTN1eFOzynyz3scaRQJhlr-non5tFMpwJ4egom0Gb_3Yx8UKl4PtwoUa75eXJtUyvb82gGA_8oTocBgdd5Vl6KC_na3121AYFeOfH1EZFWnXumVYN1TxXSavX0zioH1iS1Q3hyT5M_HegvcGexmYLvYi2B-lA9OtllJMMHPraim_2W1K48E_KzGb88bBX0qcuMMqKryn6UXZPr5pkDrZrF9MJgzu2B4Axyw9gkVF02_F6WgCmVJfAtI0aPZ4Txo8Bux-tPorl145c7y266GKKtK_iSUpvWxhfZx5u2RGq2XJZnldplL2B5xxwd6iqWv0M0FjkpAcNxR9DwGlkXd-PGIk5vJUgz6ukivlpU4y8QsWS1DUwf3onUi19C-3QF_lGMo_7-TWMXKoe6mtNdXA3IuKTKpLSCkQb19qujW9htQyskiR5E-V6Db5oSgUJ6F4uDRofq5lcg0oyXmXyRhgC1ffzkolfArmTyemNc-4zhM-TqRHXkMBnJDv0SO7RAFD09BlBlYywPKIvyrQkBvMJbE1WGNzi0L9SmuC2Q09V7O5PMrItkGUmw7BQ526E-Q_PTMcYtx-ber_jOTxyqgcbLUEQPqbPMzRU5CUJ=w934-h934-s-no?authuser=0",
      narxi: "250ming so'm",
      description:
        "Naqsh bilan o'yilgan lagan. Uyga yanada chiroy qo'shish uchun, yoki sovg'a sifatida ishlatiladi",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
    {
      name: "Milliy yulduzli lagan",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc8th3m8H4YxUTU9_VO-gycoWwxKmmZ-dZqoNnwsW3mf6rNzI1DhGv0tgnUe0JMovdftl59oOyD1RbyyBgJhalMYYe19WyyxlaSdGYdNG2M6sNjIIPvJPdw7MFn1jg95Hk2ALvp25tkJlQpo66svbCMo9SMXDcUioB6iOKtivLQrkDjlzCD_U2cPEhSuiXLXK5vFzt_B30IVWZfp-XreqH6p6wH5_YPG1XBsQghI-8PrhhOff2N_7boehMAK1ELrX2N_fiSHm-YmZmcZFYSyqJEVpBlcerJPJWpeqz45zVyR6ABWlbLOf2NoLHyLqEUIhFW8dEyRGWUMT4YjZRRFpHYn51PRKz6x4J6Nk8Qw-gvJAOzKLBRkJtcCakWTWvVuMVH_rar81mIGKHwA0Vb7JtAb06RB_Q02bdw7az-ARr4j2MZHzYWS7GBNZF66ebV7VqciD-ccHe87AXKPX5mudZcPllw2JrXREWGo5eEV4q8DH6vvJk919afRE13qrWaa_awjxlEu_Dxm63PbYnq7epsttr1Kz7OwZEW5ZE9lNdqVr2or6K9bAdfzvoN5xrFMqfkWY29eup0nUW9enREA-EpiXi9YYeCEf-2JEW-mNdNgE272P65VhHDUKacS-hwQPF_Q99C3z7Nj1WlDF9FNfbW6V9Y8tAncxB4juQpU91xQ3e8_a_grimLQ_z94BEBQzsMLuUh07dHo3EjW8p42T1zy7lk3qt_uSFWjazgaGKmrzwIZmrrCbM2Rea6SqPyr7L11jkRXwLDzm70H0p8wdRgnD1Pw6zs8NWtDQJvjeYPgEMLo-A347rfnPKnvigCegLSioc8BGOLwtJwEEmWb6f8x5w2fsFAKy1MlY8cYVWkC4YhMCXq2XSUoQuLSMkKSYKqD4Qn8TZ6tdxQ1LaI6=w935-h934-s-no?authuser=0",
      narxi: "275ming so'm",
      description:
        "Yulduz va gul bilan o'yilgan lagan. Uyga yanada chiroy qo'shish uchun, yoki sovg'a sifatida ishlatiladi",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
    {
      name: "Arab yozuvli lagan",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9dpSyfKfOgPeaeKpKMOzqhwWXqjUNdSEjG7iv2SBFn1IGSQIOWrJOEb6VzQ9e6OUbkbB3eQHiU9tT_Vgr551TWe9KOK8yi239orWfIc65Pj6p2ZVM00AAz9J7S01DSJf4nRh7UWMmwNNiwm8VVjH7biJKOXQsFCAqEr4CaQ7bcbPpHhH9fCXC_tI56K50y2L4ht_1phA_42k1pjZFHQI6juNKYcs_AaeCZ9z8nZ-aRVsgHMChnyNitElNfIqrWXRNWtuN0CGpra8Pe8xhtf_83JsDicWlkl1x2lMzDQ1mR63-zbHb8Y0Zufi2kedcZsATHcHF4S2NJ_h5aE-T_ZRPK7X4eDK57W8eF6w2ZYCRuNvPQDlP-yrbFhhO85DvXwIEOhETMZU6nCjFj96pywB0E0oSunF_yp7pxyUeRj_zUERyDIUxqpAcBkTtA1lrPIy_sBx7YNZg7dxpughGweJBAjISJAafodU89IQ32ULk52eaRjI8C1K6EDt7O54BBdJqtRiZi0ljEs-hRiORS_1DANRooL93U4tKNZM8qWpQgTYIJnvvzjxFy9xF0DqW1iYmn7VHkrZUiv21Upj0DfSPJ0TZOiUXgwWxg8AT-MIkHehvEoFOa9kYBvh5TRt-sJNkRIFl_YaaIr6-Ogz1Needfc55rH7pd8vDb2xURcSsAlpPmkvtXxrYHdz6vr1Ppm5OUaJgioirKwBKzEIiOieIBRUGEQU121WLqGPPKpUeIDKdmMUbJfSnMr95sg3FpZFJfrxlMWaAvYv9x3qWiMPQL2iYSh1RW-D-6pqK0uzvLXps2hkf420id2_ONOvWe6mhI6i14qZgF-wcde8gkzSuAj7Mh8cTW5cN5prD1xpImnZyJ89WvtInD8zQr3_eW2bszgG_bMOfO0MeoPwso=w934-h934-s-no?authuser=0",
      narxi: "300ming so'm",
      description: "Allohning ismi tushirilgan ajoyib, chiroyli lagan.",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
    {
      name: "Women's leadership lagani",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_mw9sd5Gg82DGpE6alRKQQVSFsfzzuITD4efQpEsoHyUEcyy__Do7_aRNSOFAy4Y8caqGNzrJ3wX3_d1qd5JLunrMHg6J2IhBVGTdUbsYAsrLoXyC773DhjaNckD2nCZ5KKmkySaVygxvCJSbUbWlWt_YvsWOUhdduYqJNoFGeWrBhUxWgbibW8eiQipfplk27S76tUKTEG6mg21i91rl9qwkVt7ilQd1Ec0vn40UPRvV0bWlNNrXirVCv-q_jWIvtluhIxd0dvn6exD6eLGQ3ySCCBCFgfWq1xgngo8eCPb4InKdY_jMjNDc5ZMjGpaOY8OML4BMoDICaSzv61NPDUNNSOhzXUY6sRdhlLTbbpZHMUw-tHgx-O5wyiZ359IYBbIt7ytfiVKNGze5oapRaOLxHnBvpjNMT8-pApPSgkaTWQGUAoFGiiqVMCeqdRsKcoe52WlYS7eSFMIXgAgrcpAVupB5hI36UpDnUXM-AKzNGkqWpXAVRfdb_oXCbUsDI4MPpNIBmazHA2jxa0upoUvExPy1-i-s2Y8SXxVf4j4a0IlM_rDoYnuG-xJDb7FIhrRkF4TKZchOdzZ9ASdvxvibEba1toucBgPWYHJK2vPGqZjarUONrDN5Xz3D-d-HoG_t7rwEz9jzoEZiR8Ka8jnOe73nt-u7nBlIh5qVe0k7Vgq95WB2dQv70QJu_RgMIZE3fXFwO6rM9MkUAILW5qJXgskWeHoVT6a_-rbKJz4Tx9u3juyHFzClDb29m0cF9QrKUDqqE3Zgt0RlPDYOj7E8dImI0RzyIL73fG-c0pds32gLykKMPASKUbFjxYYjzBTptF4nBVvDdDFumNlfJaLT1Vr6XyASkP2bHSFlBhVE_kMik1wnKXZPCV-nwywCaLBJdCa-iN7ITDIJL=w935-h934-s-no?authuser=0",
      narxi: "150ming so'm",
      description:
        "Ayollar va ularning xalq oldidgi kuchi uchun yaratilgan lagan.",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
    {
      name: "Shaftoli lagani",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc_UCcffqFseypy9Bep-cP_7lHX0WBSfyxNJpp5No4l-7y0aHwexNyELbz9LZz7WJ1oQ2SpWeZQwitwYmVHBIBbSG6ggROOcEYG_2aEzYwRhkKh9h1mpvbB7YiqEg4snmKN1w8cqxG6tXlrPpKvCjIy44m7HFDrtTkbendNFEmT6OeKBjxrxwXeqUNGTAIToMZfZKMwKcL7Tl0ycBN6mU8zDeENAo63ymix9Hs2ATfd135eBaCPLgsmNuSA_XAnKb5dY94xdfqhcWCM3aNQWGs2yhAZW4k6PlChtfkVtC3Hf7zDy_7p3Gv4hQrGwQTgFvz-i2FwUsmp6237Lhd3jYrzRS8jPYQ8KLq7H5yoazpyYXlKmv5heXULMIYrcOy5WcxXX4my8CZVrEQD1jEfWTJQ1rg_mbOg2Yb6ksdWCKaY1kxNIzsheKxSpZaNoVlb-7TkycRttR-gy5UeR4fDg89BvM_vu8bxrT5_1vVOVhH_mw8NFkNL5s5_4pdSCJ7r4wCU5exMfmES6azYnmNW2ABbmlYFDEA4JIH1F8_ZYGbltr66QDaspBfH-8d7eVGz60chcZeMn2XY3FSxpx8T8lC0gj0Y6-F4lowGVjKfyKMKNs7UfNGvZoc_qXuElR92_AR3NxabR7DPF-jkUMVISUscHPwbwTbGJSdhiFddSmsIvQwKn_cnNhiGUGc3DpH_t15eL0xMmJMaVKCCqMT8_Yns43uqkqmDBhlzWcJIiT16XuSAQ0V1suH3zNgN_JQL5XWlrGG09Jud27L16dodRPx4Y76XCBM75-9bLHw3wc5d3PoCsf6TOqu9-8dvuonNQKBcljldJ_hPv1tmiGQqnpnw_VaBtRAbj17WgTbMrCVnTLytK1X-C2uZKT2_AagQand13kwR_BT8xQiIaLtaJ=w934-h934-s-no?authuser=0",
      narxi: "250ming so'm",
      description:
        "Ustiga shaftoli rasmi tushirilgan va bezak uchun tayyorlangan lagan.",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
    {
      name: "Naqshli lagani",
      img: "https://lh3.googleusercontent.com/pw/AIL4fc9qMiu0axQVbMFbGKCmdJJUHiQIvFSyavUlHEBhglCRjD8RMlAoRYbnmcyMhqJGrh61VjUU0SYaKZXk7NBtc8fRvyekxLhYPxmch0vhedHkP4vsbWQYwskKodw_2Q2CBkJ9y6HSOoVhnRFcJwEmJsPmm8cwYqr4qJXVCEuP02TiXShlpo3xs-r52UDSbZrb44Gc3Ej662j7ujrWl3TyiBfnMjev5-Zc2Z3hscdywxLdTsEqxJ6fRj-MwlB6EiSiATX1OdtBDygeSysPPCS8o1TtRHvYeAecGvzkRp8q2s4BK2au4WwJcAIccMHYjvIw24f6RPKn14Lf15mv30f4m_F7D4e9f0Yp_Simn3ZFEbmcRCy97GeAjlKGjfcgtX_L5eEY-ClO9mllNTgmJxqNztO_N1LQ0NstVG8S3_fZJ48_0qjehqZ6GD6sWa1zxGrwov9Dp_0fbl0dghX-B12PP164CfsaUllX6Ggasjhqt8RTHG3VMnnE-0vlrohNtpAeF5lOXz9fkX8i2qTg3JpuVpd7YgYNsWqLaUhWvlPBDgt-t5FLtrV4_saOwOg1faPk0NHvSgQi_L389qqGXDHVBQhau5oyO8R2KOp5w0L-bMRQBf2NU8cPu_LW2UYnl4YarKlEVYk5yVq6n1M7c-fHrkwWfjpi4UaZe0Z7QGgd7c2h1lEO__BU62WEBx2ZiVT1nDSDlyQsFMmSVrxLY186RY7JZo3OyPTYpJ-qTfGxlKUua3EfFQ6g51wkSWFvkxlC9eiaq-DM7q4mZfSXZuY1lpvD-_el7WEMeI9OP45MJvHyjfwWiaXJUa5bkEhY0RJqI4mkiWUu1iLzNWB56UcqufVY_1aEG5GJz_BMzX-vltkqnJrCdPbTxiQa_X6x4wb2yNwr9b9nPnjj8VbevXLu=w935-h934-s-no?authuser=0",
      narxi: "200ming so'm",
      description:
        "Ajoyib usulda, millatimizga xos bo'lgan holda yaratilgan lagan",
      cover: "cover",
      repeat: "no-repeat",
      position: "center center",
    },
  ];
  //   const [products, setProducts] = useState(laganlar);

  return (
    <>
      <div className="products">
        <div className="container">
          {laganlar.map((lagan) => {
            return (
              <MahCom 
                name={lagan.name}
                description={lagan.description}
                narxi={lagan.narxi}
                img={lagan.img}
                repeat={lagan.repeat}
                cover={lagan.cover}
                position={lagan.position}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mahsulotlar;
