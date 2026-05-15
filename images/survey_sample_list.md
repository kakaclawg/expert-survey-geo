# Survey Sample Selection

## Session 1: Similarity Assessment (21 samples)
Methods compared: GT, Exp0 (3ch), Exp3 (ChanFus), Exp4 (SpatFus), AttGated
Each sample: 5 images (GT + 4 methods)
Total: 105 images

### Grainstone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 1 | 194-1194B-22R-1_61.071.0_5 | Color tone matches GT; natural granular texture |
| 2 | 194-1194B-30R-2_34 | Retains some layering/banding that Exp0 loses |
| 3 | 194-1194B-27R-1_30 | More heterogeneous texture; Exp0 too uniform |

### Floatstone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 4 | 194-1199A-13R-1_52.067.0_4 | Clearly more heterogeneous than Exp0 (smooth) |
| 5 | 194-1199A-12R-7_59.068.0_0 | Scattered pore-like features; Exp0 blurry |
| 6 | 194-1199A-13R-5_108.0119.0_6 | Clean output; Exp0 has FMS grid artifacts |

### Packstone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 7 | 194-1194B-11R-1-CC_140.0146.0_2 | Correct dark tone; fine texture match |
| 8 | 194-1194B-16R1-17R1_97.5102.0_0 | Better texture heterogeneity |
| 9 | 194-1194B-8R-2-CC_58.065.5_1 | Accurate dark color tone |

### Wackestone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 10 | 194-1194B-2R-1_89 | Clean output; Exp0 has vertical stripe artifacts |
| 11 | 194-1194B-15R-2_132.0149.0_9 | More natural mud texture |
| 12 | 194-1194B-15R-2_132.0149.0_0 | Good color tone match |

### Boundstone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 13 | 194-1196A-36R-1_22.026.0_0 | More heterogeneous; Exp0 more uniform |
| 14 | 133-816C-6R-1_112.5116.0_0 | Richer texture variation |
| 15 | 133-816C-5R-1_25.032.0_2 | More natural light color tone |

### Rudstone (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 16 | 194-1196A-18R-3_43.046.5_0 | Clean; Exp0 has FMS grid artifacts |
| 17 | 194-1196A-18R-1_68.072.0_0 | Retains pore/vug features |
| 18 | 194-1199A-12R-1_49.059.0_0 | Natural texture |

### Crystalline (3 samples)
| # | Sample ID | AttGated Advantage |
|---|-----------|-------------------|
| 19 | 194-1196A-51R-1_98.0109.0_4 | Clean; Exp0 has obvious FMS pad grid artifact |
| 20 | 194-1196A-51R-3_118.0125.5_2 | Smoother, more natural output |
| 21 | 194-1196A-51R-2_67.570.5_0 | Better light tone match |

---

## Session 2: Perceptual Test (14 samples)
Methods: GT, Exp0, AttGated only
Each sample: 3 images -> 42 images total, shuffled and anonymized
Questions per image: (1) What texture type? (2) Is this AI-generated?

### Grainstone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 1 | 194-1196A-48R-1_131.0135.0_1 | AttGated texture looks natural/realistic |
| 2 | 194-1194B-29R-3_13 | AttGated output hard to distinguish from real |

### Floatstone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 3 | 194-1196A-12R-1_1.54.5_0 | AttGated porous texture looks realistic |
| 4 | 194-1199A-13R-4_1.08.5_1 | Color tone close to GT |

### Packstone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 5 | 194-1194B-10R-4-CC_1.015.5_8 | Dark tone accurate; hard to tell fake |
| 6 | 194-1194B-8R-1_137.5142.5_1 | Uniform texture realistic |

### Wackestone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 7 | 194-1194B-15R-2_51.061.0_1 | Muddy texture realistic |
| 8 | 194-1194B-2R-1_84 | Natural mud texture |

### Boundstone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 9 | 133-816C-11R-1_62.073.0_4 | Light tone maintained |
| 10 | 133-816C-11R-3_50.057.0_0 | Natural texture variation |

### Rudstone (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 11 | 194-1199A-12R-6_54.569.5_6 | Natural surface texture |
| 12 | 194-1199A-12R-1_62.077.0_8 | Scattered features preserved |

### Crystalline (2 samples)
| # | Sample ID | Selection Reason |
|---|-----------|-----------------|
| 13 | 194-1196A-51R-2_22.025.0_0 | Porous crystalline texture |
| 14 | 194-1196A-51R-2_132.0135.0_0 | Light tone natural |

---

## File Locations
- Session 1 images: `/gpfs/scratch/xaw017/survey_session1/` (105 files)
- Session 2 images: `/gpfs/scratch/xaw017/survey_session2/` (42 files)
- Source: `/gpfs/scratch/xaw017/visual_comparison/`

## Notes
- Session 1 and Session 2 use completely different samples (no overlap)
- All 35 original visual_comparison samples are used (21 + 14 = 35)
- Session 2 images will need anonymized filenames before distribution
