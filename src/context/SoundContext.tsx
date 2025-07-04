import { createContext, useContext, useState, type ReactNode } from 'react'

type SoundContextType = {
  isSound: boolean
  toggleSound: () => void
}

const SoundContext = createContext<SoundContextType | undefined>(undefined)

export const useSoundToggle = (): SoundContextType => {
  const context = useContext(SoundContext)
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider')
  }
  return context
}

export const SoundProvider = ({ children }: { children: ReactNode }) => {
  const [isSound, setIsSound] = useState<boolean>(true)

  const toggleSound = () => setIsSound(prev => !prev)

  return (
    <SoundContext.Provider value={{ isSound, toggleSound }}>
      {children}
    </SoundContext.Provider>
  )
}
