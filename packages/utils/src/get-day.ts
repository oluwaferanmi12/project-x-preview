const DAY_LABELS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Today",
    "Yesterday",
  ];
  
export const getMessageDay = (timestamp: string) => {
    const firstWord = timestamp.trim().split(/\s+/)[0];
  
    return DAY_LABELS.includes(firstWord) ? firstWord : "Today";
  };
  

export const getMessageTime = (timestamp: string) => {
    const parts = timestamp.trim().split(/\s+/);
  
    return DAY_LABELS.includes(parts[0])
      ? parts.slice(1).join(" ")
      : timestamp;
  };