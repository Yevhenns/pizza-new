import css from './ProductDescription.module.scss';

type ProductDescriptionProps = {
  item: Product;
};

export function ProductDescription({ item }: ProductDescriptionProps) {
  const { title, description, dimension } = item;

  return (
    <div className={css.descriprionWrapper}>
      <hgroup className={css.info}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{dimension}</p>
      </hgroup>
    </div>
  );
}
