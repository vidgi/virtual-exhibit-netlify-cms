import React, { Suspense, useRef } from "react";
import { Canvas } from '@react-three/fiber';


import Keyboard from "./Keyboard";
import './styles.css';

import Loader from "./components/Loader";
import RotationWrapper from "./components/RotationWrapper";
import Overlay from "./components/Overlay";

function App() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);

  
  return (
    <>
    

      <div style={{width: '100%', height: '100%'}}>
     

       

        <Canvas
          shadows
          adjustCamera
          onCreated={(state) => state.events.connect(overlay.current)}
          dpr={[1, 2]}>

          {/* Start Lights */}
          <fog attach="fog" args={["white", 0, 40]} />
          <ambientLight intensity={0.4}/>
          <directionalLight
            castShadow
            position={[2.5, 8, 5]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          {/* End Lights */}


          {/* Start Scene objects */}
          <Suspense fallback={<Loader />}>
            {/* <GroundPlane position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}/> */}
            <RotationWrapper scroll={scroll}>
              <Keyboard position={[0, 0, 0]} rotation={[0.25, 0, 0]} scale={[15, 15, 15]}/>
            </RotationWrapper>
          </Suspense>
          {/* End Scene objects */}

        </Canvas>
        {/* <div className="helper">
        <small><small><small>SCROLL DOWN</small></small></small>
        </div> */}
      </div>

      <Overlay ref={overlay} caption={caption} scroll={scroll} />
      <div className="exhibitiontitle" style={{color:'black'}}>
         .
         .
</div>
    </>
  );
}

export default App;
