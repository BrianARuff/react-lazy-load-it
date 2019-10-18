import { lazy, Suspense } from "react";

export default function LazyComponent(Component, fallbackComponent, pathToComponent="", classNames="", styleObj={}, key="") {
  try {
    const Component = lazy(() => import(pathToComponent));
    return (
      <Suspense fallback={fallbackComponent}>
        <Component className={classNames} style={styleObj} key={key} />
      </Suspense>
    );
  } catch (error) {
    return <p>{JSON.parse(error, null, 4)}</p>
  }
}
