import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LandScapeComponent } from "./land-scape.component";

describe("LandScapeComponent", () => {
  let component: LandScapeComponent;
  let fixture: ComponentFixture<LandScapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandScapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandScapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
