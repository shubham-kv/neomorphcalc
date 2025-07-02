import {createContext} from 'react'
import {CalculatorState} from './types'

export const CalculatorContext = createContext<CalculatorState | null>(null)
