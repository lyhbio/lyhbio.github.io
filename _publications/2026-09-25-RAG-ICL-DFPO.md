---
title: "Empowering LLMs for biomedical information extraction with RAG-ICL and DFPO"
collection: publications
category: 'journal-articles'
permalink: /publication/2026-09-25-RAG-ICL-DFPO
excerpt: 'This work introduces a structure-aware framework that empowers large language models (LLMs) for biomedical information extraction (named entity recognition and relation extraction) by integrating RAG-ICL (retrieval-augmented in-context learning), DFPO (dual-head fine-grained preference optimization), and a dual-mode calibration re-ranking module.'
date: 2026-09-25
venue: 'Pattern Recognition'
paperurl: 'https://doi.org/10.1016/j.patcog.2026.115042'
citation: 'Li, Y.#, Wang, Y.#, Wang, H.#, Yan, Y., Yang, F., Pan, Z., Tong, Z., Li, Y., Wu, W., Jiang, B., Bai, M., Xie, Y., Zhou, Y.*, & Zhu, F.* (2026). &quot;Empowering LLMs for biomedical information extraction with RAG-ICL and DFPO.&quot; <i>Pattern Recognition</i>, 183, 115042.'
---

### Abstract

Biomedical information extraction (IE) converts unstructured biomedical text into structured representations, including named entity recognition (NER) and relation extraction (RE). This work proposes a structure-aware framework that empowers large language models (LLMs) for biomedical IE through three components: RAG-ICL, a retrieval-augmented in-context learning strategy that selects entity-aware demonstrations and reconstructs them as layered recognition prototypes; DFPO, a dual-head fine-grained preference optimization that combines supervised fine-tuning, DPO-positive optimization, and fine-grained execution to align the model toward precise structured outputs; and DMCR, a dual-mode calibration re-ranking module that validates and normalizes predictions to reduce format errors. Extensive experiments on biomedical NER and RE benchmarks demonstrate consistent improvements over retrieval-augmented ICL, fixed ICL, domain-specific biomedical LLMs, and specialized IE systems.

### Highlights

*   Proposes a structure-aware framework that reframes biomedical NER and RE as a pattern-recognition problem for large language models.
*   RAG-ICL: retrieval-augmented in-context learning with entity-aware prototype selection to reduce demonstration bias.
*   DFPO: dual-head fine-grained preference optimization that combines supervised fine-tuning, DPO-positive optimization, and fine-grained execution.
*   DMCR: dual-mode calibration re-ranking that validates structured predictions and reduces format errors.

### Publication Details

*   **DOI:** [10.1016/j.patcog.2026.115042](https://doi.org/10.1016/j.patcog.2026.115042)
*   **Authors:** Yinghong Li#, Yu Wang#, Hongyin Wang#, Yudong Yan, Fan Yang, Zupeng Pan, Zhuohao Tong, Yongkang Li, Wenjun Wu, Boren Jiang, Mingze Bai, Yongfang Xie, Ying Zhou*, Feng Zhu*
*   **Code:** [lyhbio/RAG-ICL-DFPO](https://github.com/lyhbio/RAG-ICL-DFPO)
*   **Model:** [liyinghong/DFPO-Gemma2](https://huggingface.co/liyinghong/DFPO-Gemma2)
