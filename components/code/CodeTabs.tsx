import { codeToHtml } from 'shiki';
import { CodeTabsClient, type Sample } from './CodeTabsClient';

const samples = [
  {
    label: 'cURL',
    lang: 'bash',
    code: `curl -X POST https://api.reshelvs.com/v1/products \\
  -H "Authorization: Bearer $RESHELVS_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Ceramic Mug",
    "brand": "atlas",
    "price": 2400,
    "shelf": "kitchen-essentials"
  }'`,
  },
  {
    label: 'Node',
    lang: 'ts',
    code: `import { Reshelvs } from '@reshelvs/sdk';

const rs = new Reshelvs(process.env.RESHELVS_KEY);

await rs.products.create({
  name: 'Ceramic Mug',
  brand: 'atlas',
  price: 2400,
  shelf: 'kitchen-essentials',
});`,
  },
  {
    label: 'Python',
    lang: 'python',
    code: `from reshelvs import Reshelvs

rs = Reshelvs(api_key=os.environ["RESHELVS_KEY"])

rs.products.create(
    name="Ceramic Mug",
    brand="atlas",
    price=2400,
    shelf="kitchen-essentials",
)`,
  },
];

const theme = {
  name: 'reshelvs-dark',
  type: 'dark',
  colors: {
    'editor.background': '#0c0c10',
    'editor.foreground': '#fafafa',
  },
  tokenColors: [
    { scope: ['comment'], settings: { foreground: '#737373', fontStyle: 'italic' } },
    { scope: ['string', 'string.quoted'], settings: { foreground: '#a5f3fc' } },
    { scope: ['constant.numeric'], settings: { foreground: '#fbcfe8' } },
    { scope: ['keyword', 'storage'], settings: { foreground: '#c4b5fd' } },
    { scope: ['entity.name.function', 'support.function'], settings: { foreground: '#fde68a' } },
    { scope: ['variable', 'support.variable'], settings: { foreground: '#fafafa' } },
    { scope: ['punctuation'], settings: { foreground: '#a3a3a3' } },
  ],
} as const;

export async function CodeTabs() {
  const rendered: Sample[] = await Promise.all(
    samples.map(async (s) => ({
      label: s.label,
      html: await codeToHtml(s.code, {
        lang: s.lang,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        theme: theme as any,
      }),
    })),
  );
  return <CodeTabsClient samples={rendered} />;
}
