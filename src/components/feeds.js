
  const feeds = [{
    linkText: 'xkcd.com',
    linkUrl: 'http://xkcd.com/atom.xml',
  },
  {
    linkText: 'CSS-Tricks',
    linkUrl: 'http://feeds.feedburner.com/CssTricks',
  },
  {
    linkText: 'Explosm.net',
    linkUrl: 'http://feeds.feedburner.com/Explosm',
  },
  {
    linkText: 'BBC News – Home',
    linkUrl: 'http://feeds.bbci.co.uk/news/rss.xml',
  },
  {
    linkText: 'BBC News – World',
    linkUrl: 'http://feeds.bbci.co.uk/news/world/rss.xml',
  },
  {
    linkText: 'Scott Hanselman’s Blog',
    linkUrl: 'http://feeds.hanselman.com/ScottHanselman',
  },
  {
    linkText: 'Slashdot',
    linkUrl: 'http://rss.slashdot.org/Slashdot/slashdot',
  },
  {
    linkText: 'Engadget RSS Feed',
    linkUrl: 'http://www.engadget.com/rss.xml',
  },
  {
    linkText: 'CNN.com – Top Stories',
    linkUrl: 'http://rss.cnn.com/rss/cnn_topstories.rss',
  },
  {
    linkText: 'NYT > Home Page',
    linkUrl: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml',
  },
  {
    linkText: 'NYT > Business Day',
    linkUrl: 'http://www.nytimes.com/services/xml/rss/nyt/Business.xml',
  },
  {
    linkText: 'Mashable',
    linkUrl: 'http://feeds.mashable.com/Mashable',
  },
  {
    linkText: 'Order of the Stick',
    linkUrl: 'http://www.giantitp.com/comics/oots.rss',
  },
  {
    linkText: 'The Verge',
    linkUrl: 'http://www.theverge.com/rss/index.xml',
  },
  {
    linkText: 'Polygon',
    linkUrl: 'http://www.polygon.com/rss/index.xml',
  },
  {
    linkText: 'Vox',
    linkUrl: 'http://www.vox.com/rss/index.xml',
  },
  {
    linkText: 'Ars Technica',
    linkUrl: 'http://feeds.arstechnica.com/arstechnica/index/',
  },
  {
    linkText: 'WIRED',
    linkUrl: 'http://feeds.wired.com/wired/index',
  },
  {
    linkText: 'Lifehacker',
    linkUrl: 'http://feeds.gawker.com/lifehacker/full',
  },
  {
    linkText: 'TechCrunch',
    linkUrl: 'http://feeds.feedburner.com/Techcrunch',
  },
  {
    linkText: 'Saturday Morning Breakfast Cereal',
    linkUrl: 'http://www.smbc-comics.com/rss.php',
  },
  {
    linkText: 'Dumbing of Age ',
    linkUrl: 'http://www.dumbingofage.com/feed/',
  },
  {
    linkText: 'Le Monde.fr',
    linkUrl: 'http://www.lemonde.fr/rss/une.xml',
  },
  {
    linkText: 'Seth Godin’s Blog',
    linkUrl: 'http://sethgodin.typepad.com/seths_blog/atom.xml',
  },
  {
    linkText: 'MacRumors',
    linkUrl: 'http://feeds.macrumors.com/MacRumors-All',
  },
  {
    linkText: 'TEDTalks',
    linkUrl: 'http://feeds.feedburner.com/TEDTalks_video',
  },
  {
    linkText: 'News : NPR',
    linkUrl: 'http://www.npr.org/rss/rss.php?id=1001',
  },
  {
    linkText: 'The Oatmeal',
    linkUrl: 'http://feeds.feedburner.com/oatmealfeed',
  },
  {
    linkText: 'Gizmodo',
    linkUrl: 'http://feeds.gawker.com/gizmodo/full',
  },
  {
    linkText: 'Cucumber Quest',
    linkUrl: 'http://cucumber.gigidigi.com/feed/',
  },
  {
    linkText: 'How-To Geek',
    linkUrl: 'http://feeds.howtogeek.com/HowToGeek',
  },
  {
    linkText: 'Manly Guys Doing Manly Things',
    linkUrl: 'http://thepunchlineismachismo.com/feed',
  },
  {
    linkText: 'The Next Web',
    linkUrl: 'http://feeds2.feedburner.com/TheNextWeb',
  },
  {
    linkText: 'High Scalability',
    linkUrl: 'http://feeds.feedburner.com/HighScalability',
  },
  {
    linkText: 'Nature',
    linkUrl: 'http://feeds.nature.com/nature/rss/current',
  },
  {
    linkText: 'Coding Horror',
    linkUrl: 'http://feeds.feedburner.com/codinghorror',
  },
  {
    linkText: 'Hacker News',
    linkUrl: 'https://news.ycombinator.com/rss',
  },
  {
    linkText: 'Oglaf! — Comics. Often dirty.',
    linkUrl: 'http://oglaf.com/feeds/rss/',
  },
  {
    linkText: 'Awkward Zombie',
    linkUrl: 'http://www.awkwardzombie.com/awkward.php',
  },
  {
    linkText: 'Journal of the American Chemical Society',
    linkUrl: 'http://feeds.feedburner.com/acs/jacsat',
  },
  {
    linkText: 'Scandinavia and the World',
    linkUrl: 'http://feeds.feedburner.com/satwcomic',
  },
  {
    linkText: 'Android Police',
    linkUrl: 'http://www.androidpolice.com/feed/',
  },
  {
    linkText: 'Search Engine Land',
    linkUrl: 'http://feeds.searchengineland.com/searchengineland',
  },
  {
    linkText: 'Kotaku',
    linkUrl: 'http://feeds.gawker.com/kotaku/full',
  },
  {
    linkText: 'Humble Mumble',
    linkUrl: 'http://blog.humblebundle.com/rss',
  },
  {
    linkText: 'Content Marketing Institute',
    linkUrl: 'http://contentmarketinginstitute.com/feed/',
  },
  {
    linkText: 'Krebs on Security',
    linkUrl: 'http://krebsonsecurity.com/feed/',
  },
  {
    linkText: 'Schneier on Security',
    linkUrl: 'https://www.schneier.com/blog/atom.xml',
  },
  {
    linkText: 'HubSpot Marketing Blog',
    linkUrl: 'http://blog.hubspot.com/marketing/rss.xml',
  },
  {
    linkText: 'Wait But Why',
    linkUrl: 'http://waitbutwhy.com/feed',
  },
  {
    linkText: 'Gunnerkrigg Court',
    linkUrl: 'http://www.gunnerkrigg.com/rss.xml',
  },
  {
    linkText: 'Paranatural',
    linkUrl: 'http://www.paranatural.net/rss.php',
  },
  {
    linkText: 'Naked Security',
    linkUrl: 'https://nakedsecurity.sophos.com/feed/',
  },
  {
    linkText: 'The Moz Blog',
    linkUrl: 'http://feedpress.me/mozblog',
  },
  {
    linkText: 'Inside Intercom',
    linkUrl: 'http://feeds.feedburner.com/insideintercom',
  },
  {
    linkText: 'Serious Eats',
    linkUrl: 'http://feeds.feedburner.com/seriouseatsfeaturesvideos',
  },
  {
    linkText: 'Smashing Magazine',
    linkUrl: 'https://www.smashingmagazine.com/feed/',
  },
  {
    linkText: 'Entrepreneur: Latest Marketing Articles',
    linkUrl: 'https://www.entrepreneur.com/topic/marketing.rss',
  },
  {
    linkText: 'Signal v. Noise – Medium',
    linkUrl: 'https://m.signalvnoise.com/feed',
  },
  {
    linkText: 'Reddit’s r/technology',
    linkUrl: 'https://www.reddit.com/r/technology/.rss',
  },
  {
    linkText: 'Reddit’s r/worldnews',
    linkUrl: 'https://www.reddit.com/r/worldnews/top/.rss',
  },
  {
    linkText: 'Reddit’s r/games',
    linkUrl: 'https://www.reddit.com/r/Games/top/.rss',
  },
  {
    linkText: 'Reddit’s r/askculinary',
    linkUrl: 'https://www.reddit.com/r/AskCulinary/.rss',
  },
  {
    linkText: 'Martin Fowler',
    linkUrl: 'https://martinfowler.com/feed.atom',
  }
]

export default feeds