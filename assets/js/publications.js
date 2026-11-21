/* Update this list as new papers appear. Keep DOI links in canonical https://doi.org/... form. */
const publications = [
    {
    year: 2026, type: 'Journal article', area: 'EV integration & smart charging',
    areas: ['EV integration & smart charging', 'Power systems & distribution networks', 'Intelligent energy management & demand response', 'Mathematical modelling & optimisation'],
    title: 'Multiagent–Multilevel Coordination Based Transactive EV Charging Framework',
    authors: 'Payal V. Dahiwale and Zakir H. Rather',
    venue: 'IEEE Systems Journal, vol. 20, no. 3, pp. 1058–1069 (2026)',
    doi: 'https://doi.org/10.1109/JSYST.2026.3701625'
  },
  {
    year: 2026, type: 'Journal article', area: 'EV integration & smart charging',
    areas: ['EV integration & smart charging', 'Power systems & distribution networks'],
    title: 'A Smart Charging Strategy for Electric Vehicles in Constrained Distribution Network',
    authors: 'Payal Vyankat Dahiwale and Zakir H. Rather',
    venue: 'IEEE Transactions on Intelligent Vehicles, vol. 11, no. 6, pp. 769–782 (2026)',
    doi: 'https://doi.org/10.1109/TIV.2026.3690683'
  },
  {
    year: 2026, type: 'Preprint', area: 'Scientific computing & tools',
    areas: ['Scientific computing & tools', 'Mathematical modelling & optimisation'],
    title: 'Minimalistic Terminal Editor for Julia Programming — MinTEJ: A Friendly Approach for a Scientific Programmer',
    authors: 'Poornachandratejasvi Laxman Bhattar, Payal V. Dahiwale, Krishnarjunulu Thota and Anurag Sharma',
    venue: 'arXiv:2605.12275 (2026)',
    link: 'https://arxiv.org/abs/2605.12275'
  },
  {
    year: 2026, type: 'Conference paper', area: 'Scientific computing & tools',
    areas: ['Scientific computing & tools'],
    title: 'Abstract Syntax Tree (Past.Jl) for Julia Program Visualization and Description',
    authors: 'Poornachandratejasvi Laxman Bhattar and Payal V. Dahiwale',
    venue: '2026 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT 2026)',
    link: 'https://scholar.google.com/scholar?q=%22Abstract+syntax+tree%22+%22Past.Jl%22'
  },
  {
    year: 2025, type: 'Journal article', area: 'Energy policy & sustainable mobility',
    areas: ['Energy policy & sustainable mobility', 'Mathematical modelling & optimisation'],
    title: 'L1 Distance-Based Optimization Approach for Recommendation and Effective Intervention Selection for EV Policy Implementation',
    authors: 'Payal Vyankat Dahiwale and Zakir H. Rather',
    venue: 'IEEE Transactions on Energy Markets, Policy and Regulation, vol. 4, no. 1, pp. 53–66 (published online 2025)',
    doi: 'https://doi.org/10.1109/TEMPR.2025.3628116'
  },
  {
    year: 2024, type: 'Journal article', area: 'EV integration & smart charging',
    areas: ['EV integration & smart charging'],
    title: 'A Comprehensive Review of Smart Charging Strategies for Electric Vehicles and Way Forward',
    authors: 'Payal V. Dahiwale, Zakir Hussain Rather and Indradip Mitra',
    venue: 'IEEE Transactions on Intelligent Transportation Systems, vol. 25, no. 9, pp. 10462–10482 (2024)',
    doi: 'https://doi.org/10.1109/TITS.2024.3365581'
  },
  {
    year: 2024, type: 'Journal article', area: 'Energy policy & sustainable mobility',
    areas: ['Energy policy & sustainable mobility', 'Mathematical modelling & optimisation'],
    title: 'A Distance Metric Based Approach for Analyzing, Assessing, and Strengthening EV Policy',
    authors: 'Payal V. Dahiwale, Zakir H. Rather and Indradip Mitra',
    venue: 'IEEE Transactions on Energy Markets, Policy and Regulation, vol. 3, no. 1, pp. 46–58 (2024)',
    doi: 'https://doi.org/10.1109/TEMPR.2024.3454413'
  },
  {
    year: 2023, type: 'Conference paper', area: 'EV integration & smart charging',
    areas: ['EV integration & smart charging', 'Power systems & distribution networks'],
    title: 'Smart Opportunity Charging Strategy for Electric Buses',
    authors: 'Payal V. Dahiwale, Zakir Hussain Rather and Amita Kumari',
    venue: '2023 IEEE PES Innovative Smart Grid Technologies Europe (ISGT Europe)',
    doi: 'https://doi.org/10.1109/ISGTEUROPE56780.2023.10407876'
  },
  {
    year: 2023, type: 'Conference paper', area: 'EV integration & smart charging',
    areas: ['EV integration & smart charging', 'Power systems & distribution networks', 'Mathematical modelling & optimisation'],
    title: 'Centralized Multi-objective Framework for Smart EV Charging in Distribution System',
    authors: 'Payal Vyankat Dahiwale and Zakir H. Rather',
    venue: '2023 IEEE PES Conference on Innovative Smart Grid Technologies – Middle East (ISGT Middle East), pp. 1–5',
    doi: 'https://doi.org/10.1109/ISGTMiddleEast56437.2023.10078604'
  }
];

const list = document.querySelector('#publication-list');
if (list) {
  const search = document.querySelector('#pub-search');
  const area = document.querySelector('#pub-area');
  const type = document.querySelector('#pub-type');
  const count = document.querySelector('#pub-count');

  const escapeHTML = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const render = () => {
    const q = search.value.trim().toLowerCase();
    const filtered = publications.filter(p => {
      const haystack = `${p.title} ${p.authors} ${p.venue} ${p.area} ${p.year}`.toLowerCase();
      return (!q || haystack.includes(q)) && (area.value === 'all' || p.area === area.value) && (type.value === 'all' || p.type === type.value);
    });

const preferredOrder = [
  'A Smart Charging Strategy',
  'Multiagent-Multilevel Coordination',
  'Abstract Syntax Tree',
  'Minimalistic Terminal Editor'
];

const getPriority = (title) => {
  const index = preferredOrder.findIndex(prefix =>
    title.startsWith(prefix)
  );
  return index === -1 ? preferredOrder.length : index;
};

filtered.sort((a, b) =>
  b.year - a.year ||
  getPriority(a.title) - getPriority(b.title) ||
  a.title.localeCompare(b.title)
);
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'publication' : 'publications'} shown`;
    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">No publications match those filters. Try a different keyword or topic.</div>';
      return;
    }
    const years = [...new Set(filtered.map(p => p.year))];
    list.innerHTML = years.map(year => `<section class="publication-year-group"><h2 class="pub-year">${year}</h2><div class="pub-list">${filtered.filter(p => p.year === year).map(p => `
      <article class="pub-item">
        <div class="pub-yearbox">${p.year}</div>
        <div>
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.authors)}</p>
          <div class="pub-venue">${escapeHTML(p.venue)}</div>
          <div class="pub-actions"><a href="${escapeHTML(p.doi)}" target="_blank" rel="noopener">DOI ↗</a><span class="tag">${escapeHTML(p.area)}</span><span class="tag">${escapeHTML(p.type)}</span></div>
        </div>
      </article>`).join('')}</div></section>`).join('');
  };
  [search, area, type].forEach(el => el.addEventListener(el === search ? 'input' : 'change', render));
  render();
}
