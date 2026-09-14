+++
title = "Day 01 - 23/06/2026"
weight = 1
+++

## Completed Tasks

### 1. Setup and Configured Jira Kanban Board for Project Progress Management

- Established a workflow based on the Epic → Story → Task model.
- Analyzed Use Case Diagrams to define functional scope and divided it into 7 main feature Epics.
  - Ensured each Epic is decomposed into specific User Stories and Tasks, making progress easy to track.
  - Separated Epic E0 (SRS & Documentation) to manage requirement analysis and project documentation activities, preventing overlap with feature development Epics.

### 2. The Basics of React Native

#### 2.1. Core Components and Native Components

[Reference](https://reactnative.dev/docs/intro-react-native-components)

##### React Native uses Native Components

- React Native does not use HTML like ReactJS.
- When writing UIs in React Native, components are translated into the platform's native components.
- React Native acts as an intermediary layer, allowing us to write in JavaScript while still generating a native UI.

##### Core Components

React Native has a set of basic components called **Core Components**.

| React Native UI Component | Android View | iOS View | Web Analog | Description |
| ------------------------- | ------------ | -------- | ---------- | ----------- |
| `<View>`                  | `<ViewGroup>` | `<UIView>`| A non-scrolling `<div>` | A container that supports layout with flexbox, style, some touch handling, and accessibility controls |
| `<Text>`                  | `<TextView>`  | `<UITextView>`| `<p>` | Displays, styles, and nests strings of text and even handles touch events |
| `<Image>`                 | `<ImageView>` | `<UIImageView>`| `<img>` | Displays different types of images |
| `<ScrollView>`            | `<ScrollView>`| `<UIScrollView>`| `<div>` | A generic scrolling container that can contain multiple components and views |
| `<TextInput>`             | `<EditText>`  | `<UITextField>`| `<input type="text">` | Allows the user to enter text |

More details at [Core Components](https://reactnative.dev/docs/components-and-apis)

-> Core Architecture: **React Component → React Native Component → Native Component → Android/iOS UI**

#### 2.2. React Fundamentals

[Reference](https://reactnative.dev/docs/intro-react)

##### React Native is Built on React

- To learn React Native well, you must first understand React.
- React Native does not replace React; instead, it uses React's core principles to build mobile interfaces.

##### UI is Built from Components

- In React, everything is a component.
- An application is created by assembling multiple small components together.
  
-> **Build UI by dividing it into independent, reusable blocks.**

##### Components Receive Data via Props

- Props stands for "Properties".
- Characteristics:
  - Read-only
  - Cannot be modified directly inside the receiving component

-> **Props are like function parameters.**

##### Components Can Have State

- State is the component's internal data.
- Characteristics:
  - Can be changed via `setState` or `useState`
  - When state changes → the component automatically re-renders
- When state changes:
  - React automatically re-renders the UI
  - No direct UI manipulation is needed

-> **State is the "memory" of a component.**

#### Key takeaway

> React Native = React (Components + Props + State + Hooks) + Native Components (View, Text, Image, ...)  
