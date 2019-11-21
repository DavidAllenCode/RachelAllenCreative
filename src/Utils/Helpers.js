import React from "react";
const baseImgUrl = "https://rachelallencreative.blob.core.windows.net/images/";

const ra_logo = `${baseImgUrl}ra_logo.png`;
const parallax_landing = `${baseImgUrl}parallax_landing.jpg`;
const parallax_photography = `${baseImgUrl}parallax_photography.jpg`;
const parallax_design = `${baseImgUrl}parallax_design.jpg`;
const portrait = `${baseImgUrl}portrait.jpeg`;
const rp_firefall = `${baseImgUrl}rp_firefall.jpg`;
const rp_go = `${baseImgUrl}rp_go.jpg`;
const rp_prayknox = `${baseImgUrl}rp_prayknox.jpg`;
const rp_unitedcamp = `${baseImgUrl}rp_unitedcamp.jpg`;
const rp_westhills = `${baseImgUrl}rp_westhills.jpg`;
const rp_summer17 = `${baseImgUrl}rp_summer17.jpg`;
const fav_babymoto = `${baseImgUrl}fav_babymoto.jpg`;
const fav_girlcovered = `${baseImgUrl}fav_girlcovered.jpg`;
const fav_manboat = `${baseImgUrl}fav_manboat.jpg`;
const fav_manhat = `${baseImgUrl}fav_manhat.jpg`;
const fav_manlean = `${baseImgUrl}fav_manlean.jpg`;
const fav_monk = `${baseImgUrl}fav_monk.jpg`;
const fav_peoplewaving = `${baseImgUrl}fav_peoplewaving.jpg`;
const fav_temple = `${baseImgUrl}fav_temple.jpg`;
const fav_womangrill = `${baseImgUrl}fav_womangrill.jpeg`;
const fav_womanhat = `${baseImgUrl}fav_womanhat.jpg`;
const fav_womanpray = `${baseImgUrl}fav_womanpray.jpeg`;
const fav_womansitting = `${baseImgUrl}fav_womansitting.jpg`;
const fav_man = `${baseImgUrl}fav_man.jpeg`;
const about_portrait = `${baseImgUrl}about_portrait.jpg`;
const about_pen = `${baseImgUrl}about_pen.jpg`;
const about_photo = `${baseImgUrl}about_photo.jpg`;
const about_design = `${baseImgUrl}about_design.jpg`;
const d_underconstruction = `${baseImgUrl}d_underconstruction.jpg`;
const d_loveyourneighbor = `${baseImgUrl}d_loveyourneighbor.jpg`;
const d_firstdaze = `${baseImgUrl}d_firstdaze.jpg`;
const d_familyremix = `${baseImgUrl}d_familyremix.jpg`;
const d_unitedweekend = `${baseImgUrl}d_unitedweekend.jpg`;
const d_thefight = `${baseImgUrl}d_thefight.jpg`;
const d_differencemaker = `${baseImgUrl}d_differencemaker.jpg`;
const d_grecianhoneymoon = `${baseImgUrl}d_grecianhoneymoon.jpg`;
const d_hopkinswedding = `${baseImgUrl}d_hopkinswedding.jpg`;
const d_concordoutdoors = `${baseImgUrl}d_concordoutdoors.jpg`;
const d_solemnassembly = `${baseImgUrl}d_solemnassembly.jpg`;
const d_realgrit = `${baseImgUrl}d_realgrit.jpg`;
const p_brunei = `${baseImgUrl}p_brunei.jpg`;
const p_jakarta = `${baseImgUrl}p_jakarta.jpg`;
const p_kualalumpur = `${baseImgUrl}p_kualalumpur.jpg`;
const p_lombok = `${baseImgUrl}p_lombok.jpg`;
const p_loykrathong = `${baseImgUrl}p_loykrathong.jpeg`;
const p_medan = `${baseImgUrl}p_medan.jpg`;
const p_hopkinswedding = `${baseImgUrl}p_hopkinswedding.jpg`;

export {
  ra_logo,
  parallax_landing,
  parallax_photography,
  parallax_design,
  portrait,
  rp_firefall,
  rp_go,
  rp_prayknox,
  rp_unitedcamp,
  rp_westhills,
  rp_summer17,
  fav_babymoto,
  fav_girlcovered,
  fav_manboat,
  fav_manhat,
  fav_manlean,
  fav_monk,
  fav_peoplewaving,
  fav_temple,
  fav_womangrill,
  fav_womanhat,
  fav_womanpray,
  fav_womansitting,
  fav_man,
  about_pen,
  about_photo,
  about_design,
  about_portrait,
  d_underconstruction,
  d_loveyourneighbor
};

const favImage = image => {
  const c = image.class !== undefined ? image.class : "";
  return <img className={`fav-img ${c}`} src={image.src} alt={image.alt} />;
};

const fav_row1 = FavoriteRow(
  [
    { src: fav_womanhat, alt: "woman hat" },
    { src: fav_girlcovered, alt: "girl covered" },
    { src: fav_womanpray, alt: "woman praying", class: "extended" }
  ],
  "left"
);
const fav_row2 = FavoriteRow(
  [
    { src: fav_manhat, alt: "man in hat" },
    { src: fav_manboat, alt: "man in boat" },
    { src: fav_manlean, alt: "man leaning" }
  ],
  "right"
);
const fav_row3 = FavoriteRow(
  [
    { src: fav_temple, alt: "big temple" },
    { src: fav_monk, alt: "monk in street" },
    { src: fav_peoplewaving, alt: "people waving" }
  ],
  "left"
);
const fav_row4 = FavoriteRow(
  [
    { src: fav_womansitting, alt: "woman sitting", class: "left115" },
    { src: fav_man, alt: "man with steely gaze", class: "left115" },
    { src: fav_babymoto, alt: "baby on moto", class: "left357" }
  ],
  "right"
);
const fav_row5 = FavoriteRow(
  [{ src: fav_womangrill, alt: "woman at grill" }],
  "center"
);

export const FavoriteRows = [fav_row1, fav_row2, fav_row3, fav_row4, fav_row5];

export function FavoriteRow(photos, direction) {
  if (photos) {
    if (direction === "left") {
      const [first, second, third] = photos;
      return (
        <div className="row fav-row justify-content-center">
          <div className="col-7">
            <div className="crop-single">{favImage(first)}</div>
          </div>
          <div className="col-4">
            <div className="crop-double top">{favImage(second)}</div>
            <div className="crop-double">{favImage(third)}</div>
          </div>
        </div>
      );
    } else if (direction === "right") {
      const [first, second, third] = photos;
      return (
        <div className="row fav-row justify-content-center">
          <div className="col-4">
            <div className="crop-double top">{favImage(first)}</div>
            <div className="crop-double">{favImage(second)}</div>
          </div>
          <div className="col-7">
            <div className="crop-single">{favImage(third)}</div>
          </div>
        </div>
      );
    } else {
      const [first] = photos;
      return (
        <div className="row fav-row justify-content-center">
          <div className="col-11">
            {favImage(photos)}
            <img className="fav-img w-100" src={first.src} alt={first.alt} />
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
}

const templateImg = image => {
  const c = image.class !== undefined ? image.class : "";
  return (
    <div className="col-4">
      <a href={image.href}>
        <div className="crop">
          <img src={image.src} alt={image.alt} className={`gp-image ${c}`} />
        </div>
      </a>
      <p className="img-desc">{image.desc}</p>
    </div>
  );
};

export const DesignRows = [
  ImageRow([
    {
      src: d_underconstruction,
      alt: "under construction",
      href: "/gs-missions-conference",
      desc: "Missions Conference | Design Suite"
    },
    {
      src: rp_prayknox,
      alt: "pray knox",
      href: "/prayknox",
      desc: "PrayKnox | Branding"
    },
    {
      src: d_loveyourneighbor,
      alt: "love your neighbor",
      href: "/love-your-neighbor",
      desc: "Love Your Neighbor | T-shirt Design",
      class: "neighbor"
    }
  ]),
  ImageRow([
    {
      src: rp_go,
      alt: "go conference",
      href: "/go-conference-2017",
      desc: "GO Conference | Design Suite"
    },
    {
      src: d_firstdaze,
      alt: "first 30 daze",
      href: "/first-30-daze",
      desc: "First 30 Daze | Book Design"
    },
    {
      src: rp_firefall,
      alt: "fire fall west hills",
      href: "/fire-fall-today",
      desc: "Fire Fall Today | Album Artwork"
    }
  ]),
  ImageRow([
    {
      src: rp_unitedcamp,
      alt: "united camp",
      href: "/united-camp",
      desc: "United Summer Camp | Design Suite"
    },
    {
      src: d_familyremix,
      alt: "family remix",
      href: "/family-remix",
      desc: "Family ReMix | Summer Campaign"
    },
    {
      src: rp_westhills,
      alt: "west hills shirt",
      href: "/west-hills-logo",
      desc: "West Hills | Branding"
    }
  ]),
  ImageRow([
    {
      src: d_unitedweekend,
      alt: "united weekend",
      href: "/united-wknd",
      desc: "United WKND | DNOW Campaign"
    },
    {
      src: d_thefight,
      alt: "the fight",
      href: "/the-fight",
      desc: "The Fight | Branding"
    },
    {
      src: d_differencemaker,
      alt: "difference make mug",
      href: "/difference-maker",
      desc: "Difference Maker | Mother's Day Present",
      class: "d-maker"
    }
  ]),
  ImageRow([
    {
      src: d_grecianhoneymoon,
      alt: "honeymoon shower inviation",
      href: "/grecian-honeymoon",
      desc: "Grecian Honeymoon Shower | Invitation",
      class: "g-shower"
    },
    {
      src: d_hopkinswedding,
      alt: "wedding shower invitation",
      href: "/hopkins-shower-invite",
      desc: "Hopkins Wedding Shower | Invitation",
      class: "w-shower"
    },
    {
      src: d_concordoutdoors,
      alt: "concord outdoors logo",
      href: "/concord-outdoors",
      desc: "Concord Outdoors | Logo",
      class: "c-outdoors"
    }
  ]),
  ImageRow([
    {
      src: d_solemnassembly,
      alt: "house of prayer",
      href: "/solemn-assembly",
      desc: "Solemn Assembly Prayer Gathering | Design Suite",
      class: "s-assembly"
    },
    {
      src: d_realgrit,
      alt: "real grit",
      href: "/real-grit",
      desc: "Real Grit | Logo Design"
    }
  ])
];

function ImageRow(items) {
  const cols = items.map(item => {
    return templateImg(item);
  });
  if (items) {
    return <div className="row text-center">{cols}</div>;
  }
}

export const PhotoRows = [
  ImageRow([
    {
      src: p_brunei,
      alt: "brunei boy",
      href: "/brunei",
      desc: "Brunei | Southeast Asia",
      class: "brunei"
    },
    {
      src: p_jakarta,
      alt: "jarkarta man",
      href: "/jakarta",
      desc: "Jakarta | Indonesia | Southeast Asia",
      class: "jakarta"
    },
    {
      src: p_kualalumpur,
      alt: "kuala lumpur",
      href: "/malaysia",
      desc: "Kuala Lumpur | Malaysia | Southeast Asia",
      class: "malaysia"
    }
  ]),
  ImageRow([
    {
      src: fav_womanhat,
      alt: "laos woman",
      href: "/laos",
      desc: "Laos | Southeast Asia",
      class: "laos"
    },
    {
      src: p_lombok,
      alt: "indonesian woman",
      href: "/lombok",
      desc: "Lombok | Indonesia | Southeast Asia",
      class: "lombok"
    },
    {
      src: p_loykrathong,
      alt: "chinese lanterns",
      href: "/loy-krathong",
      desc: "Loy Krathong | Thailand | Southeast Asia",
      class: "loy"
    }
  ]),
  ImageRow([
    {
      src: p_medan,
      alt: "Medan man",
      href: "/medan",
      desc: "Medan | Indonesia | Southeast Asia",
      class: "medan"
    },
    {
      src: fav_monk,
      alt: "thai monk",
      href: "/thailand",
      desc: "Thailand | Southeast Asia",
      class: "monk"
    },
    {
      src: p_hopkinswedding,
      alt: "hopkins wedding photo",
      href: "/behanhopkins-wedding",
      desc: "Behan-Hopkins Wedding | Knoxville",
      class: "wedding"
    }
  ])
];
