/*
 * Copyright 2020 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { EditorType } from "../../common/EditorTypes";
import { EMPTY_FILE_DMN, EMPTY_FILE_BPMN, EMPTY_FILE_SCESIM, File, newFile } from "../../common/File";

describe("File::Empty defaults", () => {
  test("DMN", async () => {
    expect(EMPTY_FILE_DMN.fileName).toEqual("new-file");
    expect(EMPTY_FILE_DMN.editorType).toEqual(EditorType.DMN);
    expect(EMPTY_FILE_DMN.isReadOnly).toBeFalsy();

    await EMPTY_FILE_DMN.getFileContents().then(data => expect(data).toBe(""));
  });

  test("BPMN", async () => {
    expect(EMPTY_FILE_BPMN.fileName).toEqual("new-file");
    expect(EMPTY_FILE_BPMN.editorType).toEqual(EditorType.BPMN);
    expect(EMPTY_FILE_BPMN.isReadOnly).toBeFalsy();

    await EMPTY_FILE_BPMN.getFileContents().then(data => expect(data).toBe(""));
  });

  test("SCESIM", async () => {
    expect(EMPTY_FILE_SCESIM.fileName).toEqual("new-file");
    expect(EMPTY_FILE_SCESIM.editorType).toEqual(EditorType.SCESIM);
    expect(EMPTY_FILE_SCESIM.isReadOnly).toBeFalsy();

    await EMPTY_FILE_SCESIM.getFileContents().then(data => expect(data).toBe(""));
  });
});

describe("File::newFile", () => {
  test("constructor", async () => {
    const file: File = newFile(EditorType.DMN);
    expect(file.fileName).toEqual("new-file");
    expect(file.editorType).toEqual(EditorType.DMN);
    expect(file.isReadOnly).toBeFalsy();

    await file.getFileContents().then(data => expect(data).toBe(""));
  });
});

describe("File", () => {
  test("With content", async () => {
    const file: File = {
      editorType: EditorType.DMN,
      fileName: "new-file",
      isReadOnly: true,
      getFileContents: () => Promise.resolve("content")
    };

    expect(file.fileName).toEqual("new-file");
    expect(file.editorType).toEqual(EditorType.DMN);
    expect(file.isReadOnly).toBeTruthy();

    await file.getFileContents().then(data => expect(data).toBe("content"));
  });
});
