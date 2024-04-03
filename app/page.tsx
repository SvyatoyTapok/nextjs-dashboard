import Carousel from "./components/Carousel/Carousel";

export default function Page() {
  return (
    <div
      style={{
        overflow: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        backgroundColor: '#7335b7',
        borderRadius: '0 0 350px 0',
        height: '90vh',
        alignItems: 'center',
        display: 'flex',
      }}>
      <Carousel />
    </div>
  );
}
