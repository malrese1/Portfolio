export interface ToolCategory {
  category: string;
  tools: string[];
}

export const toolCategories: ToolCategory[] = [
  { category: "CRM", tools: ["Salesforce", "Yardi"] },
  { category: "Sales Engagement", tools: ["ZoomInfo Engage"] },
  { category: "Prospecting", tools: ["LinkedIn Sales Navigator"] },
  { category: "Conversation Intelligence", tools: ["Gong"] },
  { category: "ZoomInfo Platform", tools: ["SalesOS", "OperationsOS"] },
  { category: "Productivity", tools: ["Microsoft Office"] },
];
