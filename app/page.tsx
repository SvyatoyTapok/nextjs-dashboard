import Carousel from "./components/Carousel/Carousel";

export default function Page() {
  return (
    <>
      <div
        style={{
          backgroundColor: '#7335b7',
          position: 'absolute',
          height: '92vh',
          width: '100%',
          borderRadius: '0 0 350px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Carousel />
      </div>
    </>
  );
}
