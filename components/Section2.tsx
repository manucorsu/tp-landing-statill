import SpikeSep from "./SpikeSep";

export default function Section2() {
  type FeaturesTableData = {
    readonly vendedor: {
      readonly desc: string;
      readonly features: readonly string[];
    };
    readonly comprador: {
      readonly desc: string;
      readonly features: readonly string[];
    };
  };
  const data: FeaturesTableData = {
    vendedor: {
      desc: "En Statill te ayudamos a digitalizar tu comercio y conectar con tus clientes.",
      features: [
        "Organizamos tu stock",
        "Registramos tus ventas",
        "Analizamos tu clientela",
        "Publicamos tus promociones",
        "Facilitamos tus ventas online",
      ],
    },
    comprador: {
      desc: "En Statill te damos la mejor experiencia de compra online para tu día a día.",
      features: [
        "Recomendamos locales",
        "Encontramos el producto que buscás",
        "Te compartimos promociones",
        "Te permitimos pre-ordenar productos",
      ],
    },
  };

  const FeatureUl = ({ items }: { items: readonly string[] }) => (
    <ul className="space-y-3 mt-6">
      {items.map((f) => (
        <li key={f} className="flex items-center gap-3">
          <svg
            className="flex-shrink-0"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            aria-hidden
          >
            <circle cx="5" cy="5" r="5" fill="#FF3938" />
          </svg>

          <span className="text-xl font-semibold text-[#000000]">{f}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section>
      <br />
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-[#FF3938]">Vendedor</h3>
            <p className="mt-3 text-xl text-[#777777] max-w-md">
              {data.vendedor.desc}
            </p>
            <FeatureUl items={data.vendedor.features} />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-[#FF3938]">
              Comprador
            </h3>
            <p className="mt-3 text-xl text-[#777777] max-w-md">
              {data.comprador.desc}
            </p>

            <div className="md:max-w-md">
              <FeatureUl items={data.comprador.features} />
            </div>
          </div>
        </div>
      </div>
      <br />
      <SpikeSep color="red" />
    </section>
  );
}
