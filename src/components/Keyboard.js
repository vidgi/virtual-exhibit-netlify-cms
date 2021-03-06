/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

// import ModelPath from '/Keyboard.gltf';

export default function Keyboard(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/test2.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} position={[0.01,0.07,-0.01]} scale={0.0865}> 
           <meshStandardMaterial
              color={"#c8f5a6"}
              roughness={0.5}
              metalness={0.95}
              wireframe = {true}
              attach="material"
              transparent={true}
              opacity={0.8}
              wireframeLinewidth = {1}
         />
      </mesh>
      
    </group>
  )
}

useGLTF.preload('/test2.gltf')

// export default function Keyboard(props) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/Keyboard.gltf')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001.geometry}
//         material={materials.NovelKeys}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_1.geometry}
//         material={materials.Lime}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_2.geometry}
//         material={materials.Grape}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_3.geometry}
//         material={materials.Blueberry}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_4.geometry}
//         material={materials.Lemon}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_5.geometry}
//         material={materials.Strawberry}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube001_6.geometry}
//         material={materials.Material}
//       />
//     </group>
//   )
// }

// useGLTF.preload('/Keyboard.gltf')