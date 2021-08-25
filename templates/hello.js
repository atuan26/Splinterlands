
const cardList = ['card_1-0-c', 'card_1-1-c', 'card_2-0-c', 'card_2-1-c', 'card_3-0-c', 'card_3-1-c', 'card_4-0-c', 'card_4-1-c', 'card_106-3-c', 'card_126-2-c', 'card_157-4-c', 'card_158-4-c', 'card_159-4-c', 'card_160-4-c', 'card_214-3-c', 'card_227-3-c', 'card_248-3-c', 'card_266-5-c', 'card_281-3-c', 'card_5-0-c', 'card_5-1-c', 'card_6-0-c', 'card_6-1-c', 'card_7-0-c', 'card_7-1-c', 'card_8-0-c', 'card_8-1-c', 'card_87-3-c', 'card_94-3-c', 'card_133-3-c', 'card_161-4-c', 'card_162-4-c', 'card_163-4-c', 'card_167-4-c', 'card_247-3-c', 'card_260-5-c', 'card_289-3-c', 'card_9-0-c', 'card_9-1-c', 'card_10-0-c', 'card_10-1-c', 'card_70-1-c', 'card_100-3-c', 'card_164-4-c', 'card_165-4-c', 'card_228-3-c', 'card_292-4-c', 'card_11-0-c', 'card_11-1-c', 'card_110-1-c', 'card_127-2-c', 'card_166-4-c', 'card_222-3-c', 'card_236-4-c', 'card_265-5-c', 'card_298-5-c', 'card_12-0-c', 'card_12-1-c', 'card_13-0-c', 'card_13-1-c', 'card_14-0-c', 'card_14-1-c', 'card_15-0-c', 'card_15-1-c', 'card_83-3-c', 'card_103-3-c', 'card_168-4-c', 'card_169-4-c', 'card_170-4-c', 'card_171-4-c', 'card_232-3-c', 'card_264-5-c', 'card_287-3-c', 'card_16-0-c', 'card_16-1-c', 'card_17-0-c', 'card_17-1-c', 'card_18-0-c', 'card_18-1-c', 'card_19-0-c', 'card_19-1-c', 'card_93-3-c', 'card_122-2-c', 'card_134-3-c', 'card_172-4-c', 'card_173-4-c', 'card_174-4-c', 'card_178-4-c', 'card_208-3-c', 'card_250-3-c', 'card_251-3-c', 'card_257-5-c', 'card_20-0-c', 'card_20-1-c', 'card_21-0-c', 'card_21-1-c', 'card_71-1-c', 'card_123-2-c', 'card_175-4-c', 'card_176-4-c', 'card_231-3-c', 'card_280-3-c', 'card_293-4-c', 'card_22-0-c', 'card_22-1-c', 'card_98-3-c', 'card_111-1-c', 'card_177-4-c', 'card_213-3-c', 'card_254-4-c', 'card_263-5-c', 'card_296-5-c', 'card_23-0-c', 'card_23-1-c', 'card_24-0-c', 'card_24-1-c', 'card_25-0-c', 'card_25-1-c', 'card_26-0-c', 'card_26-1-c', 'card_90-3-c', 'card_120-2-c', 'card_179-4-c', 'card_180-4-c', 'card_181-4-c', 'card_182-4-c', 'card_220-3-c', 'card_225-3-c', 'card_226-3-c', 'card_272-5-c', 'card_284-3-c', 'card_27-0-c', 'card_27-1-c', 'card_28-0-c', 'card_28-1-c', 'card_29-0-c', 'card_29-1-c', 'card_30-0-c', 'card_30-1-c', 'card_85-3-c', 'card_102-3-c', 'card_183-4-c', 'card_184-4-c', 'card_185-4-c', 'card_189-4-c', 'card_253-3-c', 'card_259-5-c', 'card_31-0-c', 'card_31-1-c', 'card_32-0-c', 'card_32-1-c', 'card_72-1-c', 'card_95-3-c', 'card_186-4-c', 'card_187-4-c', 'card_221-3-c', 'card_279-4-c', 'card_33-0-c', 'card_33-1-c', 'card_112-1-c', 'card_121-2-c', 'card_188-4-c', 'card_249-3-c', 'card_271-5-c', 'card_278-4-c', 'card_297-5-c', 'card_34-0-c', 'card_34-1-c', 'card_35-0-c', 'card_35-1-c', 'card_36-0-c', 'card_36-1-c', 'card_37-0-c', 'card_37-1-c', 'card_96-3-c', 'card_118-2-c', 'card_146-4-c', 'card_147-4-c', 'card_148-4-c', 'card_149-4-c', 'card_217-3-c', 'card_233-3-c', 'card_283-3-c', 'card_38-0-c', 'card_38-1-c', 'card_39-0-c', 'card_39-1-c', 'card_40-0-c', 'card_40-1-c', 'card_41-0-c', 'card_41-1-c', 'card_101-3-c', 'card_119-2-c', 'card_150-4-c', 'card_151-4-c', 'card_152-4-c', 'card_156-4-c', 'card_216-3-c', 'card_243-3-c', 'card_261-5-c', 'card_288-3-c', 'card_42-0-c', 'card_42-1-c', 'card_43-0-c', 'card_43-1-c', 'card_73-1-c', 'card_84-3-c', 'card_153-4-c', 'card_154-4-c', 'card_234-3-c', 'card_270-5-c', 'card_295-4-c', 'card_44-0-c', 'card_44-1-c', 'card_89-3-c', 'card_113-1-c', 'card_155-4-c', 'card_239-4-c', 'card_244-3-c', 'card_269-5-c', 'card_277-5-c', 'card_45-0-c', 'card_45-1-c', 'card_46-0-c', 'card_46-1-c', 'card_47-0-c', 'card_47-1-c', 'card_48-0-c', 'card_48-1-c', 'card_86-3-c', 'card_105-3-c', 'card_135-4-c', 'card_136-4-c', 'card_137-4-c', 'card_138-4-c', 'card_229-3-c', 'card_246-3-c', 'card_268-5-c', 'card_285-3-c', 'card_49-0-c', 'card_49-1-c', 'card_50-0-c', 'card_50-1-c', 'card_51-0-c', 'card_51-1-c', 'card_52-0-c', 'card_52-1-c', 'card_99-3-c', 'card_124-2-c', 'card_139-4-c', 'card_140-4-c', 'card_141-4-c', 'card_145-4-c', 'card_206-3-c', 'card_215-3-c', 'card_245-3-c', 'card_258-5-c', 'card_282-3-c', 'card_53-0-c', 'card_53-1-c', 'card_54-0-c', 'card_54-1-c', 'card_74-1-c', 'card_92-3-c', 'card_142-4-c', 'card_143-4-c', 'card_230-3-c', 'card_294-4-c', 'card_55-0-c', 'card_55-1-c', 'card_109-1-c', 'card_125-2-c', 'card_132-3-c', 'card_144-4-c', 'card_235-4-c', 'card_256-3-c', 'card_267-5-c', 'card_290-5-c', 'card_75-2-c', 'card_114-2-c', 'card_274-5-c', 'card_78-2-c', 'card_115-2-c', 'card_223-3-c', 'card_224-4-c', 'card_252-3-c', 'card_262-5-c', 'card_76-2-c', 'card_88-3-c', 'card_107-3-c', 'card_116-2-c', 'card_212-3-c', 'card_240-3-c', 'card_275-5-c', 'card_56-0-c', 'card_56-1-c', 'card_57-0-c', 'card_57-1-c', 'card_58-0-c', 'card_58-1-c', 'card_59-0-c', 'card_59-1-c', 'card_77-2-c', 'card_108-3-c', 'card_117-2-c', 'card_130-2-c', 'card_200-4-c', 'card_201-4-c', 'card_202-4-c', 'card_203-4-c', 'card_204-4-c', 'card_205-2-c', 'card_210-4-c', 'card_211-4-c', 'card_238-2-c', 'card_255-3-c', 'card_291-4-c', 'card_60-1-c', 'card_61-1-c', 'card_62-1-c', 'card_63-1-c', 'card_79-3-c', 'card_80-3-c', 'card_91-3-c', 'card_97-3-c', 'card_128-2-c', 'card_190-4-c', 'card_191-4-c', 'card_192-4-c', 'card_193-4-c', 'card_218-3-c', 'card_242-3-c', 'card_273-5-c', 'card_64-1-c', 'card_65-1-c', 'card_66-1-c', 'card_81-3-c', 'card_104-3-c', 'card_131-3-c', 'card_194-4-c', 'card_195-4-c', 'card_196-4-c', 'card_219-3-c', 'card_67-1-c', 'card_68-1-c', 'card_129-2-c', 'card_197-4-c', 'card_198-4-c', 'card_237-2-c', 'card_241-3-c', 'card_276-5-c', 'card_69-1-c', 'card_82-3-c', 'card_199-4-c', 'card_207-3-c', 'card_209-4-c', 'card_286-3-c']
const Summoner = ['card_5-0-c', 'card_5-1-c', 'card_167-4-c', 'card_260-5-c', 'card_70-1-c', 'card_110-1-c', 'card_236-4-c', 'card_16-0-c', 'card_16-1-c', 'card_178-4-c', 'card_257-5-c', 'card_71-1-c', 'card_111-1-c', 'card_254-4-c', 'card_27-0-c', 'card_27-1-c', 'card_189-4-c', 'card_259-5-c', 'card_72-1-c', 'card_112-1-c', 'card_278-4-c', 'card_38-0-c', 'card_38-1-c', 'card_156-4-c', 'card_261-5-c', 'card_73-1-c', 'card_113-1-c', 'card_239-4-c', 'card_49-0-c', 'card_49-1-c', 'card_145-4-c', 'card_258-5-c', 'card_74-1-c', 'card_109-1-c', 'card_235-4-c', 'card_114-2-c', 'card_78-2-c', 'card_224-4-c', 'card_262-5-c', 'card_88-3-c', 'card_240-3-c', 'card_56-0-c', 'card_56-1-c', 'card_130-2-c', 'card_200-4-c', 'card_205-2-c', 'card_291-4-c']
const Monster = ['card_1-0-c', 'card_1-1-c', 'card_2-0-c', 'card_2-1-c', 'card_3-0-c', 'card_3-1-c', 'card_4-0-c', 'card_4-1-c', 'card_106-3-c', 'card_126-2-c', 'card_157-4-c', 'card_158-4-c', 'card_159-4-c', 'card_160-4-c', 'card_214-3-c', 'card_227-3-c', 'card_248-3-c', 'card_266-5-c', 'card_281-3-c', 'card_6-0-c', 'card_6-1-c', 'card_7-0-c', 'card_7-1-c', 'card_8-0-c', 'card_8-1-c', 'card_87-3-c', 'card_94-3-c', 'card_133-3-c', 'card_161-4-c', 'card_162-4-c', 'card_163-4-c', 'card_247-3-c', 'card_289-3-c', 'card_9-0-c', 'card_9-1-c', 'card_10-0-c', 'card_10-1-c', 'card_100-3-c', 'card_164-4-c', 'card_165-4-c', 'card_228-3-c', 'card_292-4-c', 'card_11-0-c', 'card_11-1-c', 'card_127-2-c', 'card_166-4-c', 'card_222-3-c', 'card_265-5-c', 'card_298-5-c', 'card_12-0-c', 'card_12-1-c', 'card_13-0-c', 'card_13-1-c', 'card_14-0-c', 'card_14-1-c', 'card_15-0-c', 'card_15-1-c', 'card_83-3-c', 'card_103-3-c', 'card_168-4-c', 'card_169-4-c', 'card_170-4-c', 'card_171-4-c', 'card_232-3-c', 'card_264-5-c', 'card_287-3-c', 'card_17-0-c', 'card_17-1-c', 'card_18-0-c', 'card_18-1-c', 'card_19-0-c', 'card_19-1-c', 'card_93-3-c', 'card_122-2-c', 'card_134-3-c', 'card_172-4-c', 'card_173-4-c', 'card_174-4-c', 'card_208-3-c', 'card_250-3-c', 'card_251-3-c', 'card_20-0-c', 'card_20-1-c', 'card_21-0-c', 'card_21-1-c', 'card_123-2-c', 'card_175-4-c', 'card_176-4-c', 'card_231-3-c', 'card_280-3-c', 'card_293-4-c', 'card_22-0-c', 'card_22-1-c', 'card_98-3-c', 'card_177-4-c', 'card_213-3-c', 'card_263-5-c', 'card_296-5-c', 'card_23-0-c', 'card_23-1-c', 'card_24-0-c', 'card_24-1-c', 'card_25-0-c', 'card_25-1-c', 'card_26-0-c', 'card_26-1-c', 'card_90-3-c', 'card_120-2-c', 'card_179-4-c', 'card_180-4-c', 'card_181-4-c', 'card_182-4-c', 'card_220-3-c', 'card_225-3-c', 'card_226-3-c', 'card_272-5-c', 'card_284-3-c', 'card_28-0-c', 'card_28-1-c', 'card_29-0-c', 'card_29-1-c', 'card_30-0-c', 'card_30-1-c', 'card_85-3-c', 'card_102-3-c', 'card_183-4-c', 'card_184-4-c', 'card_185-4-c', 'card_253-3-c', 'card_31-0-c', 'card_31-1-c', 'card_32-0-c', 'card_32-1-c', 'card_95-3-c', 'card_186-4-c', 'card_187-4-c', 'card_221-3-c', 'card_279-4-c', 'card_33-0-c', 'card_33-1-c', 'card_121-2-c', 'card_188-4-c', 'card_249-3-c', 'card_271-5-c', 'card_297-5-c', 'card_34-0-c', 'card_34-1-c', 'card_35-0-c', 'card_35-1-c', 'card_36-0-c', 'card_36-1-c', 'card_37-0-c', 'card_37-1-c', 'card_96-3-c', 'card_118-2-c', 'card_146-4-c', 'card_147-4-c', 'card_148-4-c', 'card_149-4-c', 'card_217-3-c', 'card_233-3-c', 'card_283-3-c', 'card_39-0-c', 'card_39-1-c', 'card_40-0-c', 'card_40-1-c', 'card_41-0-c', 'card_41-1-c', 'card_101-3-c', 'card_119-2-c', 'card_150-4-c', 'card_151-4-c', 'card_152-4-c', 'card_216-3-c', 'card_243-3-c', 'card_288-3-c', 'card_42-0-c', 'card_42-1-c', 'card_43-0-c', 'card_43-1-c', 'card_84-3-c', 'card_153-4-c', 'card_154-4-c', 'card_234-3-c', 'card_270-5-c', 'card_295-4-c', 'card_44-0-c', 'card_44-1-c', 'card_89-3-c', 'card_155-4-c', 'card_244-3-c', 'card_269-5-c', 'card_277-5-c', 'card_45-0-c', 'card_45-1-c', 'card_46-0-c', 'card_46-1-c', 'card_47-0-c', 'card_47-1-c', 'card_48-0-c', 'card_48-1-c', 'card_86-3-c', 'card_105-3-c', 'card_135-4-c', 'card_136-4-c', 'card_137-4-c', 'card_138-4-c', 'card_229-3-c', 'card_246-3-c', 'card_268-5-c', 'card_285-3-c', 'card_50-0-c', 'card_50-1-c', 'card_51-0-c', 'card_51-1-c', 'card_52-0-c', 'card_52-1-c', 'card_99-3-c', 'card_124-2-c', 'card_139-4-c', 'card_140-4-c', 'card_141-4-c', 'card_206-3-c', 'card_215-3-c', 'card_245-3-c', 'card_282-3-c', 'card_53-0-c', 'card_53-1-c', 'card_54-0-c', 'card_54-1-c', 'card_92-3-c', 'card_142-4-c', 'card_143-4-c', 'card_230-3-c', 'card_294-4-c', 'card_55-0-c', 'card_55-1-c', 'card_125-2-c', 'card_132-3-c', 'card_144-4-c', 'card_256-3-c', 'card_267-5-c', 'card_290-5-c', 'card_75-2-c', 'card_274-5-c', 'card_115-2-c', 'card_223-3-c', 'card_252-3-c', 'card_76-2-c', 'card_107-3-c', 'card_116-2-c', 'card_212-3-c', 'card_275-5-c', 'card_57-0-c', 'card_57-1-c', 'card_58-0-c', 'card_58-1-c', 'card_59-0-c', 'card_59-1-c', 'card_77-2-c', 'card_108-3-c', 'card_117-2-c', 'card_201-4-c', 'card_202-4-c', 'card_203-4-c', 'card_204-4-c', 'card_210-4-c', 'card_211-4-c', 'card_238-2-c', 'card_255-3-c', 'card_60-1-c', 'card_61-1-c', 'card_62-1-c', 'card_63-1-c', 'card_79-3-c', 'card_80-3-c', 'card_91-3-c', 'card_97-3-c', 'card_128-2-c', 'card_190-4-c', 'card_191-4-c', 'card_192-4-c', 'card_193-4-c', 'card_218-3-c', 'card_242-3-c', 'card_273-5-c', 'card_64-1-c', 'card_65-1-c', 'card_66-1-c', 'card_81-3-c', 'card_104-3-c', 'card_131-3-c', 'card_194-4-c', 'card_195-4-c', 'card_196-4-c', 'card_219-3-c', 'card_67-1-c', 'card_68-1-c', 'card_129-2-c', 'card_197-4-c', 'card_198-4-c', 'card_237-2-c', 'card_241-3-c', 'card_276-5-c', 'card_69-1-c', 'card_82-3-c', 'card_199-4-c', 'card_207-3-c', 'card_209-4-c', 'card_286-3-c']
const Fire = ['card_1-0-c', 'card_1-1-c', 'card_2-0-c', 'card_2-1-c', 'card_3-0-c', 'card_3-1-c', 'card_4-0-c', 'card_4-1-c', 'card_106-3-c', 'card_126-2-c', 'card_157-4-c', 'card_158-4-c', 'card_159-4-c', 'card_160-4-c', 'card_214-3-c', 'card_227-3-c', 'card_248-3-c', 'card_266-5-c', 'card_281-3-c', 'card_5-0-c', 'card_5-1-c', 'card_6-0-c', 'card_6-1-c', 'card_7-0-c', 'card_7-1-c', 'card_8-0-c', 'card_8-1-c', 'card_87-3-c', 'card_94-3-c', 'card_133-3-c', 'card_161-4-c', 'card_162-4-c', 'card_163-4-c', 'card_167-4-c', 'card_247-3-c', 'card_260-5-c', 'card_289-3-c', 'card_9-0-c', 'card_9-1-c', 'card_10-0-c', 'card_10-1-c', 'card_70-1-c', 'card_100-3-c', 'card_164-4-c', 'card_165-4-c', 'card_228-3-c', 'card_292-4-c', 'card_11-0-c', 'card_11-1-c', 'card_110-1-c', 'card_127-2-c', 'card_166-4-c', 'card_222-3-c', 'card_236-4-c', 'card_265-5-c', 'card_298-5-c']
const Water = ['card_12-0-c', 'card_12-1-c', 'card_13-0-c', 'card_13-1-c', 'card_14-0-c', 'card_14-1-c', 'card_15-0-c', 'card_15-1-c', 'card_83-3-c', 'card_103-3-c', 'card_168-4-c', 'card_169-4-c', 'card_170-4-c', 'card_171-4-c', 'card_232-3-c', 'card_264-5-c', 'card_287-3-c', 'card_16-0-c', 'card_16-1-c', 'card_17-0-c', 'card_17-1-c', 'card_18-0-c', 'card_18-1-c', 'card_19-0-c', 'card_19-1-c', 'card_93-3-c', 'card_122-2-c', 'card_134-3-c', 'card_172-4-c', 'card_173-4-c', 'card_174-4-c', 'card_178-4-c', 'card_208-3-c', 'card_250-3-c', 'card_251-3-c', 'card_257-5-c', 'card_20-0-c', 'card_20-1-c', 'card_21-0-c', 'card_21-1-c', 'card_71-1-c', 'card_123-2-c', 'card_175-4-c', 'card_176-4-c', 'card_231-3-c', 'card_280-3-c', 'card_293-4-c', 'card_22-0-c', 'card_22-1-c', 'card_98-3-c', 'card_111-1-c', 'card_177-4-c', 'card_213-3-c', 'card_254-4-c', 'card_263-5-c', 'card_296-5-c']
const Earth = ['card_23-0-c', 'card_23-1-c', 'card_24-0-c', 'card_24-1-c', 'card_25-0-c', 'card_25-1-c', 'card_26-0-c', 'card_26-1-c', 'card_90-3-c', 'card_120-2-c', 'card_179-4-c', 'card_180-4-c', 'card_181-4-c', 'card_182-4-c', 'card_220-3-c', 'card_225-3-c', 'card_226-3-c', 'card_272-5-c', 'card_284-3-c', 'card_27-0-c', 'card_27-1-c', 'card_28-0-c', 'card_28-1-c', 'card_29-0-c', 'card_29-1-c', 'card_30-0-c', 'card_30-1-c', 'card_85-3-c', 'card_102-3-c', 'card_183-4-c', 'card_184-4-c', 'card_185-4-c', 'card_189-4-c', 'card_253-3-c', 'card_259-5-c', 'card_31-0-c', 'card_31-1-c', 'card_32-0-c', 'card_32-1-c', 'card_72-1-c', 'card_95-3-c', 'card_186-4-c', 'card_187-4-c', 'card_221-3-c', 'card_279-4-c', 'card_33-0-c', 'card_33-1-c', 'card_112-1-c', 'card_121-2-c', 'card_188-4-c', 'card_249-3-c', 'card_271-5-c', 'card_278-4-c', 'card_297-5-c']
const Life = ['card_34-0-c', 'card_34-1-c', 'card_35-0-c', 'card_35-1-c', 'card_36-0-c', 'card_36-1-c', 'card_37-0-c', 'card_37-1-c', 'card_96-3-c', 'card_118-2-c', 'card_146-4-c', 'card_147-4-c', 'card_148-4-c', 'card_149-4-c', 'card_217-3-c', 'card_233-3-c', 'card_283-3-c', 'card_38-0-c', 'card_38-1-c', 'card_39-0-c', 'card_39-1-c', 'card_40-0-c', 'card_40-1-c', 'card_41-0-c', 'card_41-1-c', 'card_101-3-c', 'card_119-2-c', 'card_150-4-c', 'card_151-4-c', 'card_152-4-c', 'card_156-4-c', 'card_216-3-c', 'card_243-3-c', 'card_261-5-c', 'card_288-3-c', 'card_42-0-c', 'card_42-1-c', 'card_43-0-c', 'card_43-1-c', 'card_73-1-c', 'card_84-3-c', 'card_153-4-c', 'card_154-4-c', 'card_234-3-c', 'card_270-5-c', 'card_295-4-c', 'card_44-0-c', 'card_44-1-c', 'card_89-3-c', 'card_113-1-c', 'card_155-4-c', 'card_239-4-c', 'card_244-3-c', 'card_269-5-c', 'card_277-5-c']
const Death = ['card_45-0-c', 'card_45-1-c', 'card_46-0-c', 'card_46-1-c', 'card_47-0-c', 'card_47-1-c', 'card_48-0-c', 'card_48-1-c', 'card_86-3-c', 'card_105-3-c', 'card_135-4-c', 'card_136-4-c', 'card_137-4-c', 'card_138-4-c', 'card_229-3-c', 'card_246-3-c', 'card_268-5-c', 'card_285-3-c', 'card_49-0-c', 'card_49-1-c', 'card_50-0-c', 'card_50-1-c', 'card_51-0-c', 'card_51-1-c', 'card_52-0-c', 'card_52-1-c', 'card_99-3-c', 'card_124-2-c', 'card_139-4-c', 'card_140-4-c', 'card_141-4-c', 'card_145-4-c', 'card_206-3-c', 'card_215-3-c', 'card_245-3-c', 'card_258-5-c', 'card_282-3-c', 'card_53-0-c', 'card_53-1-c', 'card_54-0-c', 'card_54-1-c', 'card_74-1-c', 'card_92-3-c', 'card_142-4-c', 'card_143-4-c', 'card_230-3-c', 'card_294-4-c', 'card_55-0-c', 'card_55-1-c', 'card_109-1-c', 'card_125-2-c', 'card_132-3-c', 'card_144-4-c', 'card_235-4-c', 'card_256-3-c', 'card_267-5-c', 'card_290-5-c']
const Dragon = ['card_75-2-c', 'card_114-2-c', 'card_274-5-c', 'card_78-2-c', 'card_115-2-c', 'card_223-3-c', 'card_224-4-c', 'card_252-3-c', 'card_262-5-c', 'card_76-2-c', 'card_88-3-c', 'card_107-3-c', 'card_116-2-c', 'card_212-3-c', 'card_240-3-c', 'card_275-5-c', 'card_56-0-c', 'card_56-1-c', 'card_57-0-c', 'card_57-1-c', 'card_58-0-c', 'card_58-1-c', 'card_59-0-c', 'card_59-1-c', 'card_77-2-c', 'card_108-3-c', 'card_117-2-c', 'card_130-2-c', 'card_200-4-c', 'card_201-4-c', 'card_202-4-c', 'card_203-4-c', 'card_204-4-c', 'card_205-2-c', 'card_210-4-c', 'card_211-4-c', 'card_238-2-c', 'card_255-3-c', 'card_291-4-c']
const Neutral = ['card_60-1-c', 'card_61-1-c', 'card_62-1-c', 'card_63-1-c', 'card_79-3-c', 'card_80-3-c', 'card_91-3-c', 'card_97-3-c', 'card_128-2-c', 'card_190-4-c', 'card_191-4-c', 'card_192-4-c', 'card_193-4-c', 'card_218-3-c', 'card_242-3-c', 'card_273-5-c', 'card_64-1-c', 'card_65-1-c', 'card_66-1-c', 'card_81-3-c', 'card_104-3-c', 'card_131-3-c', 'card_194-4-c', 'card_195-4-c', 'card_196-4-c', 'card_219-3-c', 'card_67-1-c', 'card_68-1-c', 'card_129-2-c', 'card_197-4-c', 'card_198-4-c', 'card_237-2-c', 'card_241-3-c', 'card_276-5-c', 'card_69-1-c', 'card_82-3-c', 'card_199-4-c', 'card_207-3-c', 'card_209-4-c', 'card_286-3-c']
const Splinter = ['Fire', 'Water', 'Earth', 'Life', 'Death', 'Dragon']

window.onload = function(){ 
    Summoner.forEach(j =>{
        document.getElementById(j).style.display = 'block';
    })

    inputUser = document.querySelector('#load_username')
    roleSplinter = document.querySelectorAll('.roleSplinter')
    typeSplinter = document.querySelectorAll('.typeSplinter')

    function getSplinterType(splt){
        Splinter.forEach(s => {
            if (eval(s).includes(splt)){
                a=  s
            }
        })
        return a
    }

    // console.log(getSplinterType('card_60'))

    function addSumToStrategy(idCard){
        if (document.querySelectorAll('.Mempty')[0]){
            emptyCard = document.querySelectorAll('.Mempty')[0]
            urlImg = document.querySelector(`#${idCard}`).querySelector('img').getAttribute('src')
            manaCost = document.querySelector(`#${idCard} > div > div:nth-child(2) > div.stat-mana > div`).innerText
            cardName = document.querySelector(`#${idCard} > div > div:nth-child(3) > div.card-name-text > div.card-name-name`).innerText
            // console.log(urlImg, manaCost, cardName)
            emptyCard.classList.remove('empty')
            emptyCard.querySelector('#summonerStrategy > img').setAttribute('src', urlImg)
            emptyCard.querySelector('#summonerStrategy > img').setAttribute('alt', idCard)
            emptyCard.querySelector('.card-nameStrategy').innerText = cardName
            emptyCard.querySelector('.manacostStrategy').innerText = manaCost
            // emptyCard.id = idCard
            addNewStrategyBtn = document.querySelector('#add_new_btn')
            addNewStrategyBtn.onclick = function(){
                if(document.querySelectorAll('.filled')[0]){
                    console.log('#Summoner: ' + cardName, manaCost)
                    monsterList = document.querySelectorAll('.filled')
                    nameList = []
                    manaList = [manaCost]
                    monsterList.forEach(mon => {
                        nameList.push(mon.querySelector('.card-nameStrategy').innerText)
                        manaList.push(mon.querySelector('.manacostStrategy').innerText)
                        // console.log(mon.querySelector('.card-nameStrategy').innerText, mon.querySelector('.manacostStrategy').innerText )
                    });
                    var table = document.getElementById("tbody");
                    var row = table.insertRow(-1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var img = document.createElement('img');
                    img.src = urlImg;
                    img.style.height = '40px'
                    img.style.width = '40px'
                    cell1.innerHTML = table.rows.length;
                    cell2.innerHTML = manaList.reduce((a, b) => parseInt(a) + parseInt(b))  + "/"+ document.querySelector(".manacost_input").value
                    cell3.innerHTML = document.querySelector('.ruleset-select').querySelector('select').value;
                    cell4.innerHTML = getSplinterType(idCard);
                    cell5.innerHTML = cardName
                    cell5.appendChild(img);
                    cell6.innerHTML = ";"
                    cell7.innerHTML = ";"
                    cell6.style.display =  'flex';

        }
    }
        }

    }
    document.querySelector(".modal__overlay").onclick = function(){
        modal.style.display = 'none'
    }

    viewBtn = document.querySelector(".view_btn")
    viewBtn.onclick = function showStrategy(){
        modal = document.querySelector('.modal')
        modalDisplay = window.getComputedStyle(modal, null).display
        if (modalDisplay == 'none'){
            modal.style.display = 'flex';
        }
        else{
            console.log(modalDisplay)
        }
  
    }


    function addMonsterToStrategy(idCard){
        if (document.querySelectorAll('.empty')[0]){
            emptyCardMonster = document.querySelectorAll('.empty')[0]
            urlImgMonster = document.querySelector(`#${idCard}`).querySelector('img').getAttribute('src')
            manaCostMonster = document.querySelector(`#${idCard} > div > div:nth-child(2) > div.stat-mana > div`).innerText
            cardNameMonster = document.querySelector(`#${idCard} > div > div:nth-child(3) > div.card-name-text > div.card-name-name`).innerText
            // console.log(urlImg, manaCost, cardName)
            emptyCardMonster.classList.remove('empty')
            emptyCardMonster.classList.add('filled')
            emptyCardMonster.querySelector('.imgcardcontainer > img').setAttribute('src', urlImgMonstergit)
            emptyCardMonster.querySelector('.card-nameStrategy').innerText = cardNameMonster
            emptyCardMonster.querySelector('.manacostStrategy').innerText = manaCostMonster
            emptyCardMonster.id = idCard
        }
    }

    Summoner.forEach(s =>{
        document.getElementById(s).onclick = function showMonster(){
            cardList.forEach(j =>{
                document.getElementById(j).style.display = 'none';
            })
            addSumToStrategy(s)
            Splinter.forEach(type =>{
                if (eval(type).includes(s)) {
                    eval(type).forEach(e =>{
                        if (Monster.includes(e)){
                            document.getElementById(e).style.display = 'block';
                        }
                    })
                }

                Neutral.forEach(n => {
                    document.getElementById(n).style.display = 'block';
                })
                totalCard = document.querySelectorAll(".card")
                arr = []
                totalCard.forEach(i => {
                    if(i.style.display == 'block'){
                        arr.push(i)
                    }
                })
                document.querySelector('#count').innerHTML = arr.length
                arr.forEach(splt =>{
                    splt.onclick = function aaddMonsterToStrategy(){
                        addMonsterToStrategy(splt.id)
                    }
                })
            })
        }
    })


    submitBtn = document.getElementById('loadall')
    submitBtn.onclick = function loadAll(){
        cardList.forEach(j =>{
            document.getElementById(j).style.display = 'none';
        })
        let checkRole = 0;
        let checkType = 0;
        roleSplinter.forEach(i => {
            if (i.checked){
                console.log(i.id + ' checked')
                checkRole = 1;
                typeSplinter.forEach(splinter => {
                    if (splinter.checked){
                        console.log(splinter.id + ' checked')
                        checkType = 1
                        eval(splinter.id).forEach(j =>{
                            if (eval(i.id).includes(j)){
                                document.getElementById(j).style.display = 'block';
                            }
                        })
                    }
                });
                if (checkType === 0 && checkRole === 1){
                    eval(i.id).forEach(j =>{
                            document.getElementById(j).style.display = 'block';
                    })
                }

            }
        });
        if (checkRole===0 && checkType === 0){
            Summoner.forEach(j =>{
                document.getElementById(j).style.display = 'block';
            })
        }
        totalCard = document.querySelectorAll(".card")
        arr = []
        totalCard.forEach(i => {
            if(i.style.display == 'block'){
                arr.push(i)
            }
        })
        document.querySelector('#count').innerHTML = arr.length
    }

    
}