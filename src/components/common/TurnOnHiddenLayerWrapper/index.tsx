'use client';
import { useHiddenLayerStore } from "@/store/HiddenLayer";
import React, { useCallback, useEffect } from "react";

type Props = {
    children:React.ReactNode
    onActive:(active:boolean) => void
    className?:string
    bg?:boolean
    closeable?:boolean
}

const WrapperComponent = ({ children, onActive, className, bg, closeable }: Props) => {
  const visibility = useHiddenLayerStore(state => state.visibility);
  const changeVisibility = useHiddenLayerStore(state => state.changeVisibility);

  const onActiveCallback = useCallback(onActive, [onActive]); // Wrap with useCallback
  const changeVisibilityCallback = useCallback(changeVisibility, [changeVisibility]); // Wrap with useCallback

  useEffect(() => {
    if (!visibility) {
      onActiveCallback(false);
    }
  }, [visibility, onActiveCallback]);

  const turnOnActive = (e: React.MouseEvent) => {
    // this e.preventdefault prevents the 'parent container'
    // of this component to not run its self method
    // For example, If this component is inside a div with
    // On Click method, it will not run the onClick function.
    e.preventDefault();
    if (visibility) return;
    onActiveCallback(true);
    changeVisibilityCallback(true, bg ? true : false);
  };

  return (
    <div className={className} onClick={(e) => turnOnActive(e)}>
      {children}
    </div>
  );
};

export const TurnOnHiddenLayerWrapper = React.memo(WrapperComponent);