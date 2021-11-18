/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
    <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} scale={2}> 
           <meshStandardMaterial
              attach="material"
              color="orange"
              transparent
              opacity={0.1}
              roughness={1}
              metalness={0}
              wireframe = {true}
              wireframeLinewidth = {4}
         />
      </mesh>
          </group>

  )
}

useGLTF.preload('/scene.gltf')
