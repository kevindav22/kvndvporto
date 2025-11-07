const convertDriveLinks = (projects) => {
  if (!Array.isArray(projects)) return [];

  const toThumbnail = (id) => {
    // endpoint thumbnail lebih reliable untuk tampil di <img>
    return `https://drive.google.com/thumbnail?id=${id}&sz=w1200`;
  };

  const extractId = (url) => {
    if (!url || typeof url !== 'string') return null;

    // 1) format /file/d/ID/...
    let m = url.match(/\/file\/d\/([^\/?#]+)/);
    if (m && m[1]) return m[1];

    // 2) format id=ID
    m = url.match(/[?&]id=([^&#]+)/);
    if (m && m[1]) return m[1];

    // 3) full drive share (sometimes contains long token)
    m = url.match(/[-\w]{25,}/);
    if (m && m[0]) return m[0];

    return null;
  };

  return projects.map((p) => {
    try {
      const id = extractId(p.image);
      if (id) {
        return { ...p, image: toThumbnail(id) };
      }
      return p;
    } catch (err) {
      return p;
    }
  });
};

export default convertDriveLinks;
