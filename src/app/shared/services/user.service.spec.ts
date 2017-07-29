import { TestBed, inject } from "@angular/core/testing";

import { UserServices } from "./user.service";

describe("USerServices", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServices]
    });
  });

  it("should ...", inject([UserServices], (service: UserServices) => {
    expect(service).toBeTruthy();
  }));
});
