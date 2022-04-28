import { useMemo } from "react";
import { useScheme } from "./useScheme";

export function useColors() {
  const { scheme } = useScheme()
  const dark = scheme === 'dark'
  const colors = {
    green: '#28A45A',
    green2: '#45D37E',
    black: '#262626',
    black2: '#292929',
    fullblack: '#000',
    white: '#F1F1F1',
    white2: '#F5F5F5',
    fullwhite: '#FFFFFF',
    grey: '#969696',
    lightgrey: '#E3E3E3',
    placeholder: '#EDEDED',
    red: '#F44336',
    gold: '#FFD700'
  }
  const shadow = useMemo(() => ({
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  }), [])

  return {
    base: dark ? colors.white : colors.black,
    shadow,
    colors
  }
}