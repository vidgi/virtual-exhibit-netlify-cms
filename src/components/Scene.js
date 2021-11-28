/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Canvas, useFrame} from 'react-three-fiber'




export default function Scene({ ...props }) {

  const { nodes, materials } = useGLTF('/test2.gltf')
  // const rotationVal = -Math.PI / 2
  const ref = useRef()

  // useFrame(() => (rotationVal = rotationVal +0.01))
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  useFrame((state) => {
    const t = state.clock.getElapsedTime()+34
    ref.current.rotation.x = 5*Math.cos(t/2)/8
    ref.current.rotation.y = t/8
    ref.current.rotation.z = -0.2-(1+Math.sin(t/1.5))/4
    ref.current.position.z = (2+Math.sin(t/2))/20
    ref.current.position.x = 1
    ref.current.position.y = 0
    ref.current.scale.y = 2
    ref.current.scale.x = 2
    ref.current.scale.z = 2


  })

  return (
    <group ref={ref} dispose={null}>
    {/* <group rotation={[rotationVal, 0, 0]} scale={[1, 1, 1]}> */}
    <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} scale={2}> 
           <meshStandardMaterial
              color={"#c8f5a6"}
              roughness={0.5}
              metalness={0.95}
              wireframe = {true}
              attach="material"
              transparent={true}
              opacity={0.8}
              wireframeLinewidth = {10}
         />
      </mesh>
      {/* </group> */}

          </group>

  )
}

useGLTF.preload('/test2.gltf')
