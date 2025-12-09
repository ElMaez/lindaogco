const DeljterV = ({ color, stroke, style }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="343"
      height="615"
      className={`${style}`}
      viewBox="0 0 343 615"
    >
      <path
        fill="#77B28C"
        d="M17.5 413.5V366h193v47.5h-193Zm74 96V448h50v61.5h-50Zm0-178V270h50v61.5h-50Z"
      />
      <g opacity=".8">
        <mask id="a" fill="#fff">
          <path d="M38.533 418.434v-47.5h193v47.5h-193Zm74 96v-61.5h50v61.5h-50Zm0-178v-61.5h50v61.5h-50Z" />
        </mask>
        <path
          fill="#07201D"
          d="M38.533 418.434h-6v6h6v-6Zm0-47.5v-6h-6v6h6Zm193 0h6v-6h-6v6Zm0 47.5v6h6v-6h-6Zm-119 96h-6v6h6v-6Zm0-61.5v-6h-6v6h6Zm50 0h6v-6h-6v6Zm0 61.5v6h6v-6h-6Zm-50-178h-6v6h6v-6Zm0-61.5v-6h-6v6h6Zm50 0h6v-6h-6v6Zm0 61.5v6h6v-6h-6Zm-124 82h6v-47.5h-12v47.5h6Zm0-47.5v6h193v-12h-193v6Zm193 0h-6v47.5h12v-47.5h-6Zm0 47.5v-6h-193v12h193v-6Zm-119 96h6v-61.5h-12v61.5h6Zm0-61.5v6h50v-12h-50v6Zm50 0h-6v61.5h12v-61.5h-6Zm0 61.5v-6h-50v12h50v-6Zm-50-178h6v-61.5h-12v61.5h6Zm0-61.5v6h50v-12h-50v6Zm50 0h-6v61.5h12v-61.5h-6Zm0 61.5v-6h-50v12h50v-6Z"
          mask="url(#a)"
        />
      </g>
    </svg>
  );
};

export default DeljterV;
