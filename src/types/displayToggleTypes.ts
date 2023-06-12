export enum DisplayOption {
    Authors,
    Books,
  }
  
  export interface DisplayToggleProps {
    onDisplayChange: (option: DisplayOption) => void;
  }