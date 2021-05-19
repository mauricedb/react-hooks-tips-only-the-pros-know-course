let rerender = false
let pendingEffects = []

/**
 *
 * Public API
 *
 */
export function useEffect(callback) {
  pendingEffects.push(callback)
}

export function useState(initialState) {
  const hook = mountWorkInProgressHook(initialState)

  function setState(value) {
    hook.memoizedState = value
    rerender = true
  }

  return [hook.memoizedState, setState]
}

export function render(component) {
  rerender = false
  pendingEffects = []

  console.log("Start of rendering components")
  renderComponent(component)

  if (pendingEffects.length) {
    pendingEffects.forEach((cb) => cb())
  }

  if (rerender) {
    console.log("State updating\n")
    setTimeout(() => render(component), 1000)
  } else {
    console.log("All done")
  }
}

/**
 *
 * Internal functions
 *
 */

const workInProgressForComponents = new WeakMap()
let currentlyRenderingFiber = null

function mountWorkInProgressHook(initialState) {
  try {
    const hook =
      currentlyRenderingFiber.hooksStates[currentlyRenderingFiber.hooksIndex]
    if (hook) {
      return hook
    } else {
      const newHook = { memoizedState: initialState }
      currentlyRenderingFiber.hooksStates[currentlyRenderingFiber.hooksIndex] =
        newHook
      return newHook
    }
  } finally {
    currentlyRenderingFiber.hooksIndex++
  }
}

function findWorkInProgress(component) {
  const existingComponentState = workInProgressForComponents.get(component)
  if (existingComponentState) {
    existingComponentState.hooksIndex = 0
    return existingComponentState
  } else {
    const newComponentState = { hooksStates: [], hooksIndex: 0 }
    workInProgressForComponents.set(component, newComponentState)
    return newComponentState
  }
}

function renderWithHooks(component) {
  try {
    currentlyRenderingFiber = findWorkInProgress(component)
    const children = component()
    return children
  } finally {
    currentlyRenderingFiber = null
  }
}

function renderComponent(component) {
  const children = renderWithHooks(component)
  children.forEach((child) => renderComponent(child))
}
