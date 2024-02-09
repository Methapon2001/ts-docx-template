import fs from "fs";
import { createReport } from "docx-templates";

const template = fs.readFileSync("template.docx");

const buffer = await createReport({
  template,
  data: {
    name: "John",
    surname: "Appleseed",
  },
});

fs.writeFileSync("report.docx", buffer);
